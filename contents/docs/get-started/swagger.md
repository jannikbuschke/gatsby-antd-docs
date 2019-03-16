---
title: Swagger
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
    Swagger
</h1>

## Add swagger to project
To add swagger for interface generation, install `Swashbuckle.AspNetCore` via NuGet.

In `startup.cs` add this to the end of `ConfigureServices`:

    // Register the Swagger generator, defining 1 or more Swagger documents
    services.AddSwaggerGen();

    // Configure Swagger
    services.ConfigureSwaggerGen(
        c =>
        {
            c.SwaggerDoc(
                "v1",
                new OpenApiInfo
                {
                    Version = "v1",
                    Title = "My API v1",
                    Description = "Documentation of EmpowerSCSs API",
                    TermsOfService = new Uri("https://example.com/terms"),
                    Contact = new OpenApiContact
                    {
                        Name = "YOUR NAME",
                        Email = "YOUR MAIL",
                        Url = new Uri("https://example.com")
                    }
                });

            // Set the comments path for the Swagger JSON and UI.
            var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
            var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
            c.IncludeXmlComments(xmlPath);

            // Use fully qualified class names to remove conflicting names
            c.CustomSchemaIds(x => x.FullName);
        });

Also in `startup.cs`, add this code to the positive `if (env.IsDevelopment())` part of `Configure`, if you want swagger only to run in development environments. If not, add it just below said switch.

    // Enable middleware to serve generated Swagger as a JSON endpoint.
    app.UseSwagger();

    // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
    // specifying the Swagger JSON endpoint.
    app.UseSwaggerUI(
        c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API v1");
        });

## Only show intended endpoints
To filter for specific endpoints, use a `IDocumentFilter` by creating a class like this:

    public class SwaggerFilter : IDocumentFilter
    {
        public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
        {
            var includedPaths = swaggerDoc.Paths
                .Where(x =>
                    x.Key.StartsWith("/api/jobs") ||
                    x.Key.StartsWith("/api/plm") ||
                    x.Key.StartsWith("/api/locations") ||
                    x.Key.StartsWith("/api/personnelrequests"))
                .ToList();

            var excludedPaths = swaggerDoc.Paths
                .Where(e => !includedPaths.Remove(e)).ToList();
            excludedPaths.ForEach(x => { swaggerDoc.Paths.Remove(x.Key); });
        }
    }

and enabling filtering in `startup.cs` inside `services.ConfigureSwaggerGen` like this:

    // enable filtering of documents / endpoints
    c.DocumentFilter<SwaggerFilter>();