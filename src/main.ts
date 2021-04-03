import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import '@angular/compiler';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Sentry.init({
  dsn: "https://18b1462103444abb97d212d4493ea2d9@o562938.ingest.sentry.io/5702193",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: [
        'localhost',
        'localhost:4200',
        'd3djwxl1jddfiv.cloudfront.net',
      ],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
