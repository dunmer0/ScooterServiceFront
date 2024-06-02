import { Routes } from '@angular/router';
import {MechanicComponent} from "./mechanic/mechanic.component";
import {authGuard} from "./auth/guard/auth-guard/auth.guard";
<<<<<<< Updated upstream
import { AdminComponent } from './admin/admin.component';
import { adminGuard } from './auth/guard/auth-guard/admin.guard';

export const routes: Routes = [
  {path: 'service', canActivate:[authGuard] , component:MechanicComponent},
  {path: 'admin', canActivate:[adminGuard], component: AdminComponent}
=======
import {ResetPasswordComponent} from "./auth/reset-password/reset-password.component";

export const routes: Routes = [
  {path: 'service', canActivate:[authGuard] , component:MechanicComponent},
  {path: 'account/reset-password', component: ResetPasswordComponent},
>>>>>>> Stashed changes
];
