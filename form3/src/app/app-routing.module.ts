import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivetrackingComponent } from './livetracking/livetracking.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:"livetracking",component:LivetrackingComponent},
  {path:"header",component:HeaderComponent},
  {path:"nav",component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
