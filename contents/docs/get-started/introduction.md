---
title: Introduction
root: '/docs'
parents: ['Get Started']
---

# A webapplication framework build with react.js and ASP.NET Core

Glow is a webapplication framework intended to build business apps that run in the cloud. At its core are [React](https://reactjs.org/) and [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core): highly popular, modern, high performant technologies that are very good at solving their target problems (building general purpose user interfaces and web backends). They follow the philosophy of "doing one thing well" (they are doing quite some more things but lets not get into the details yet) and leave out more concrete scenarios for others to solve.

One such scenario are typical business CRUD style web applications, that maybe described by with the following characteristics:

- A few to a couple of dozens of users (~ 1 - 100)
- Usually requires authenticated users
- Reads and writes are balanced
- Satisfy some business needs (audit-log)
- Manages different entities and their relationships (CRUD style)
- Often some sort of (approval) workflow is needed
- Minimalistic functional UI
- Maintainable
- Evolvable (adjusting to changing business and user requirements)
- Functionality > performance (high performance is generally very valued by users, however it reads with 1-2 seconds and writes with a couple of more seconds are tolerateble)
- Configurable
- Customizable
- Integrateble

Not

- Static content (like a blog or documentation website)
- Media driven (youtube)
- Games / 3d / graphic intensive
- public facing with millions of users
- High throughput (thousand transactions per minute)

Typicall solutions:

- Modular monolith or if domain is complex enough a microservice patterns are typically used
- Persistence: (often SQL like) database
- In the past often hosted in (corporate) intranets but today also found in the cloud

These business needs are not provided (for good reasons) by above mentioned core technologies. This web framework targets this scenario by providing an educated pick of additional **libraries**, **tooling** and **boilerplate** to ease the development of such applications. The library picks and boilerplate provide a very good starting point to write business applications productively by beeing opinionated. However the project setup is just boilerplate and due to its modularity you can remove or replace any library and bring in your own.

In that sense the glue project tries to give a highly productive setup while not sacrificing freedom (also that makes the setup adaptable to new emerging libraries).

# What is included?

1. A solid pick of libraries to handle most needs of a typical web based application (i.e. authentication, client-side routing, form helpers, validation helpers, integrations etc...)
2. Patterns and opinions around these libraries (CQRS, clean, evolvable and plugin based architecture)
3. Ready to use business modules (workflow, audit-log and more)
4. Boilerplate / templates

# Core

- UI Controls (Ant Design)
- Navigation and Layouts (Ant Design + Reach Router)
- Forms (Formik + Ant Design + server side Asp Net Core validation)
- CQRS
- Data Access (Entity Framework, MS SQL Server, PostgreSQL)
- Logging (Serilog)
- Strongly typed TypeScript client

<!-- # Upcoming Features

- Ready-to-use Business Modules (i.e. Audit-Log, Approvals, Workflow etc...)
- Security (Asp .Net Core + IdentityServer)
- Datafetching (Suspense)
- Live/Bidirectional communication (SignalR) -->

<!-- # Evaluating

- Workflow Core (neutral)
- GraphQL (pessimistic)
- gRPC (neutral)
- Csharp Scripting (optimistic) -->

# Extended

- Documentation (Gatsby + Antd)
- CI/CD (AzureDevops)
- Microservice (Polly, proxy thing)
- Mobile (React Native & Expo)
