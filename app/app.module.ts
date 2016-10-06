import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { appRoutingProviders, routing } from "./app.routing";
import { AppComponent }                 from './app.component';

import { HomeComponent }                from './components/dashboard/home/home.component';
import { ProfileComponent }             from './components/dashboard/profile/profile.component';
import { AUTH_PROVIDERS }               from "angular2-jwt/angular2-jwt";
import { Auth }                         from "./service/auth.service";
import { AuthGuard }                    from "./auth.guard";

@NgModule({
  imports:      [
      BrowserModule,
      routing
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      ProfileComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [
      appRoutingProviders,
      AUTH_PROVIDERS,
      Auth,
      AuthGuard
  ]
})
export class AppModule { }
