import { Routes } from '@angular/router';
import {MechanicComponent} from "./mechanic/mechanic.component";
import {authGuard} from "./auth/guard/auth-guard/auth.guard";

export const routes: Routes = [
  {path: 'service', canActivate:[authGuard] , component:MechanicComponent},
];
