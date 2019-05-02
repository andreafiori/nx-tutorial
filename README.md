# Nx Workspace tutorial

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Angular CLI power-ups for modern development.**

## Installation

    npm install

## Run the backend (Nest)

The project will run at the port 3333:

    ng serve api

## Run the frontend (Angular app)

    ng serve todos

## Nx Quick Start & Documentation

[30-minute video showing all Nx features](https://nx.dev/getting-started/what-is-nx)

[Interactive tutorial](https://nx.dev/tutorial/01-create-application)

## Generate your first application

Run `ng g app myapp` to generate an application. When using Nx, you can create multiple applications and libraries in the same CLI workspace.

## Development server

Run `ng serve myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name --project=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://karma-runner.github.io).

Watch mode: `ng test <project> --watch`

Code coverage: `npm test <project> --code-coverage`

Isolate tests which are affected by uncommitted files `ng test libname --onlyChanged`

Re-record failing snapshots during this test run `ng test libname --updateSnapshots`

&raquo; [More info](https://blog.nrwl.io/nrwl-nx-6-3-faster-testing-with-jest-20a8ddb5064)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](http://www.protractortest.org/).

## Run affected tests

Test all projects in parallel.

Rebuild the app:

    npm run affected:build -- --base=master

Run the tests:

    npm run affected -- --target=build --base=master

## Genrate dependency graph

    npm run dep-graph

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
