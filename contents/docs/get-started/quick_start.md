---
title: Quick Start
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
  Quick Start
</h1>

## Prerequisites

[.NET Core 2.1 or above](https://dotnet.microsoft.com/download/dotnet-core/2.1)

[Node 10 or above](https://nodejs.org/en/download/)

### Optional but recommended

Some editor like [VS Code](https://code.visualstudio.com/)

## Create and initialize a project

From a commandline run

`dotnet new -i JannikB.Glue.NetcoreReact::*` to install the main template.

```
mkdir my-app
cd my-app
dotnet new netcore-react --name MyApp
npm install
```

## Start developing

Execute

`npm run start`

and from a second commandline

`dotnet run`

Your site is now running at `http://localhost:5050`

## Open the source code and start editing!

Edit the file xy and save. The website should display the changes withing a few seconds.

TODO: Quick tutorial: add a property in the backend, add a property in the form => result
