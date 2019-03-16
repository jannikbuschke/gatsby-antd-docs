---
title: AAD Authentication
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
    AAD Authentication
</h1>

## Creating an AAD App Registration
In order to register the application with AAD, an App Registration needs to be configured:

https://portal.azure.com -> Azure Active Directory -> App Registrations -> New Registration

Make sure, the supported account types is set correctly according to your use cases and set the redirect URI to something like `https://localhost:5001/signin-oicd`, combining `OpenIdConnect:BaseUrl` and `OpenIdConnect:CallbackPath` from your `launchSettings.json`.

When created, enable `ID Token` in `Authentication`. Also, create a client secret.

In `launchSettings.json`, add these values to your environmentVariables section:

    "OpenIdConnect:TenantId": "0fd06141-76ec-4006-bcf8-406b391bd7d3",
    "OpenIdConnect:ClientId": "78acc667-7a5b-4dcf-a271-52f73d1d2f75",
    "OpenIdConnect:Instance": "https://login.microsoftonline.com/",
    "OpenIdConnect:BaseUrl": "https://localhost:5001",
    "OpenIdConnect:CallbackPath": "/signin-oidc",
    "ClientSecret": "YourSecret"

`TenantId` and `ClientId` can be found in the app registration under `Overview`. The `BaseUrl` needs to correspond with your `applicationUrl` and `CallbackPath` is up to you, but needs to correspond with the `redirect URI` from your app registration.

## Ticket handling in development
Glow implements a feature for caching tickets in an SQL database so you don't have to sign in every time the application restarts. To implement that, do the following:

In `Program.cs`, add this to the true-branch of `if (EnvironmentName == "Development" || EnvironmentName == "Test")` inside `using (IServiceScope scope = host.Services.CreateScope())`:

    // Create databases for development ticket handling
    host.MigrateDatabase<SqlServerTicketStoreDbContext>();
    host.MigrateDatabase<SqlServerMsalTokenDbContext>();

## Teams SSO
To enable seamless / automatic sign in using teams, add the following to `Startup.cs` by appending it to `services.AddAuthentication(...).AddAzureAd(...)`:

    .AddJwtBearer(
        options =>
        {
            configuration.Bind("TeamsSso", options);
            options.RequireHttpsMetadata = env.IsProduction();
        });

## Test AAD login
In your application, there are a few API endpoints which allow you to sign in and out. To sign in, navigate to https://localhost:5001/Account/SignIn. It should redirect to a Microsoft login. Logging out works with https://localhost:5001/Account/SignOut.