import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authPage/auth/auth.component';
import { HomeComponent } from './HomePage/home/home.component';
import { UserComponent } from './AdminPage/user/user.component';
import { LinkComponent } from './AdminPage/link/link.component';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { AddUserComponent } from './AdminPage/add-user/add-user.component';
import { AddLinkComponent } from './AdminPage/add-link/add-link.component';
const routes: Routes = [
  { path: 'auth', pathMatch: 'full', component: AuthComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'users', pathMatch: 'full', canActivate: [AuthGuardService], component: UserComponent },
  { path: 'links', pathMatch: 'full', canActivate: [AuthGuardService], component: LinkComponent },
  { path: 'addUser', pathMatch: 'full',canActivate: [AuthGuardService], component: AddUserComponent},
  { path: 'addLink', pathMatch: 'full',canActivate: [AuthGuardService], component:  AddLinkComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
