---
title: Entity Framework
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
    Entity Framework
</h1>

## Override ConnectionString locally
Due to the ConfigurationBuilder in Program.cs, environment variables overrule connection string settings from appsettings.json and appsettings.ENV.json. Using this, one can simply specify a local ConnectionString by adding it to Properties/launchSettings.json.

## Troubleshooting: Show runtime actions
The appsettings.ENV.json can be modified to show informational information. This includes all SQL statements, EF is sending to the database. It can be enabled by setting

    "Microsoft.EntityFrameworkCore.Database.Command": "Information"
in Serilogs Override array.

## Splitting EF migration creation
If we use domain driven design (or similar), we want to have the database models in different places of the project file structure. To be modular and don't have to touch DataContext.cs every time we add a model, we can make the DataContext class partial (public partial Class DataContext : DbContext).
With that, we can simply create ExampleModel.cs files all over the file structure, looking like that:

    namespace App.Features.Example
    {
        public class ExampleClass
        {
            public string Id { get; set; }
            public string Name { get; set; }
        }
    }

    namespace App
    {
        public partial class DataContext : DbContext
        {
            public DbSet<Features.Example.ExampleClass> ExampleClasses { get; set; }
        }
    }

## Creating EF migrations
Since there are multiple DbContext inside a typical project, the ef tool needs to be told which one to create migrations for. This is done by

    dotnet ef migrations add InitialCreate --context DataContext.

## Seeding EF models
Seeding of EF tables during runtime is explained here, where the application creates data if the table is currently empty: https://docs.microsoft.com/en-us/aspnet/core/data/ef-rp/complex-data-model?view=aspnetcore-5.0&tabs=visual-studio#seed-the-database

If we want to seed the table using a migration, it can be done by a new method inside our DbContext-derived class like this:

    private static Task SeedExamples(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Features.Example.ExampleClass>().HasData(
            new Features.Example.ExampleClass
            {
                Id = "db7da3a0-9c8b-4404-87d8-1eab67aea750",
                Name = "ExampleClass 1"
            },
            new Features.Example.ExampleClass
            {
                Id = "db7da3a0-9c8b-4404-87d8-1eab67aea751",
                Name = "ExampleClass 2"
            }
        );

        return Task.CompletedTask;
    }

And executing it in our OnModelCreating method.