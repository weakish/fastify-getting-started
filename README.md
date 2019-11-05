# Fastify Getting Started

Deploying [Fastify] on [LeanEngine] Node.js environment.

[Fastify]: https://www.fastify.io/
[LeanEngine]: https://docs.leancloud.app/leanengine_overview.html

## Quick Start

Make sure you have installed [lean-cli] and have created an application at [LeanCloud]. 

[lean-cli]: https://docs.leancloud.app/leanengine_cli.html
[LeanCloud]: https://leancloud.app/

Then run the following command to bind the application:

```sh
git clone https://github.com/weakish/fastify-getting-started your-project-name
cd your-project-name
lean switch
```

Run the project locally:

```sh
npm ci
lean up
```

Then you can visit the site locally at http://127.0.0.1:3000

Deploy the project to LeanEngine staging environment (if not available, it will deploy to production environment):

```sh
lean deploy
```