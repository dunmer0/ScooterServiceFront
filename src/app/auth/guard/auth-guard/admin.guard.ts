import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  if (inject(UserService).isAdmin()) {
    return true;
  } else {
    window.alert("Unauthorized access")
    inject(Router).navigate(['/service']);
    return false;
  }
};
