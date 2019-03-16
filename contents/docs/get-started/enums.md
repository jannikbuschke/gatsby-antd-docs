---
title: Enums
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
    Enums
</h1>

## Enums as string in DB entries
Instead of storing enums as magic numbers in a database, EF can be configured to automatically use the string representation when creating the database model. This change / configuration can be done centrally and does not require any other code changes. Only the database model needs to be migrated using `dotnet ef migrations add xxx --context dbcontext` as usual.

Drop this in DataContext.cs or whereever you define your `void OnModelCreating` method. We assume, the ModelBuilder is named `modelBuilder`.

    foreach (IMutableEntityType entityType in modelBuilder.Model.GetEntityTypes())
    {
        foreach (IMutableProperty property in entityType.GetProperties())
        {
            if (property.ClrType.BaseType != typeof(Enum))
            {
                continue;
            }

            Type type = typeof(EnumToStringConverter<>).MakeGenericType(property.ClrType);
            var converter = Activator.CreateInstance(type, new ConverterMappingHints()) as ValueConverter;

            property.SetValueConverter(converter);
        }
    }