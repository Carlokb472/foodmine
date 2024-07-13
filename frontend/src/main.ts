import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http'; 
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
bootstrapApplication(AppComponent,{
  ...appConfig,
  providers: [
    provideAnimations(), 
    provideToastr(), 
    provideHttpClient(), 
    //provideRouter(appRoutes)
    provideRouter(routes) // Ensure HttpClient is provided here
  ]
}).catch((err) => console.error(err));
 
