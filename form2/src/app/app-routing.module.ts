import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SynergyComponent } from './synergy/synergy.component';
import { LoginComponent } from './login/login.component';
import { CoffeeshopComponent } from './coffeeshop/coffeeshop.component';
import { TicketnewComponent } from './ticketnew/ticketnew.component';
import { SelectbuttonComponent } from './selectbutton/selectbutton.component';
import { ServiceauthComponent } from './serviceauth/serviceauth.component';


const routes: Routes = [
  {path:"synergy",component:SynergyComponent},
  {path:"login",component:LoginComponent},
  {path:"coffeeshop",component:CoffeeshopComponent},
  {path:"ticketnew",component:TicketnewComponent},
  {path:"selectbutton",component:SelectbuttonComponent},
  {path:"service",component:ServiceauthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
