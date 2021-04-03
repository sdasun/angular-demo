# Gapstars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Serverless Build (aws cloudfront)

Deploy to the aws cloud-front:

1. Install serverless if you don't have
```bash
  npm install -g serverless
```
2. All other dependencies are in package.json devDependencies section. To install them locally just run `npm install` once.
```bash
  npm install
```
3. Configure serverless.yml file to match your environment and aws configurations. Specially the `provider->profile` section and `custom->distributionIds` section.
4. run `serverless deploy` to deploy.
```bash
  serverless deploy
```