import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameLGComponent } from './game-lg/game-lg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AdComponent } from './ad/ad.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    GameLGComponent,
    NavbarComponent,
    LoginRegisterComponent,
    AdComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
