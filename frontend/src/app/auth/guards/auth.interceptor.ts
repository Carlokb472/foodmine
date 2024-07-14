
import { inject } from '@angular/core';
import {
  HttpInterceptorFn
} from '@angular/common/http';

import { UserService } from '../../services/user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);
  const user = userService.currentUser;

  if (user && user.token) {
    req = req.clone({
      setHeaders: {
        access_token: user.token
      }
    });
  }
  return next(req);
};