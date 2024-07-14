import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/auth/guards/auth.interceptor';
import { UserService } from './app/services/user.service';
bootstrapApplication(AppComponent,{
  ...appConfig,
  providers: [
    provideAnimations(), 
    provideToastr(), 
    provideHttpClient(withInterceptors([authInterceptor])), 
    provideRouter(routes),
    UserService
  ]
}).catch((err) => console.error(err));
 
