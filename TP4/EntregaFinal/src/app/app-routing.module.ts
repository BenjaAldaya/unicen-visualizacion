import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { AdvancedSearchComponent } from './pages/advanced-search/advanced-search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RunnerComponent } from './runner/runner.component';

const routes: Routes = [
  {path:"home", component:HomeComponent },
  {path:'playgame', component:PlayGameComponent},
  {path:'search', component: AdvancedSearchComponent},
  {path:'profile', component: ProfileComponent},
  {path:'runner', component: RunnerComponent},
  {path:'**', redirectTo:'home'}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
