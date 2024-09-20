import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { FormsModule } from '@angular/forms';

import { routes } from './app.routes.ts';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideHttpClient(), ]
};
