import { Routes } from '@angular/router';
import {MechanicComponent} from "./mechanic/mechanic.component";
import {authGuard} from "./auth/guard/auth-guard/auth.guard";

import { AdminComponent } from './admin/admin.component';
import { adminGuard } from './auth/guard/auth-guard/admin.guard';
import { AdminReparationsComponent } from './admin/admin-reparations/admin-reparations.component';
import { AdminUserApproveComponent } from './admin/admin-user-approve/admin-user-approve.component';
import { ScooterDetailsComponent } from './mechanic/scooter-details/scooter-details.component';
import { IssueDetailsComponent } from './mechanic/issue-details/issue-details.component';
import {ResetPasswordComponent} from "./auth/reset-password/reset-password.component";

export const routes: Routes = [
  {path:'service', canActivate:[authGuard] , component:MechanicComponent},
  {path:'service/scooter/:id', canActivate:[authGuard] , component:ScooterDetailsComponent},
  {path:'service/issues', canActivate:[authGuard] , component:IssueDetailsComponent},

  {path:'admin', canActivate:[adminGuard], component: AdminComponent},
  {path:'admin/reparations', canActivate:[adminGuard], component:AdminReparationsComponent},
  {path:'admin/user-management', canActivate:[adminGuard], component:AdminUserApproveComponent},
  {path: 'account/reset-password', component: ResetPasswordComponent},

];

