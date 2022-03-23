import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authPage/auth/auth.component';
import { HomeComponent } from './HomePage/home/home.component';
import { UserComponent } from './AdminPage/user/user.component';
import { LinkComponent } from './AdminPage/link/link.component';
import { AddUserComponent } from './AdminPage/add-user/add-user.component';
import { AddLinkComponent } from './AdminPage/add-link/add-link.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    UserComponent,
    LinkComponent,
    AddUserComponent,
    AddLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
