import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameLGComponent } from './components/ad/game-lg/game-lg.component';
import { NavbarComponent } from './components/ad/navbar/navbar.component';
import { LoginRegisterComponent } from './components/ad/login-register/login-register.component';
import { AdComponent } from './components/ad/ad.component';
import { CategoryComponent } from './components/ad/category/category.component';
import { FooterComponent } from './components/ad/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { AdvancedSearchComponent } from './pages/advanced-search/advanced-search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GameLGComponent,
    NavbarComponent,
    LoginRegisterComponent,
    AdComponent,
    CategoryComponent,
    FooterComponent,
    HomeComponent,
    PlayGameComponent,
    AdvancedSearchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
