import {CanActivateFn, Router} from '@angular/router';
import {UserService} from "../../shared/user.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(UserService).isLoggendIn()) {
    return true;
  } else {
    inject(Router).navigate(['']);
    return false;
  }
};
