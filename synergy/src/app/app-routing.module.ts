import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PricingComponent } from './pricing/pricing.component';
import { HowitsworkComponent } from './howitswork/howitswork.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './auth.guard';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MymailboxComponent } from './mymailbox/mymailbox.component';
import { ShipmenthistoryComponent } from './shipmenthistory/shipmenthistory.component';
import { BillingComponent } from './billing/billing.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { UpdatepersonaldetailsComponent } from './updatepersonaldetails/updatepersonaldetails.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { CostcalculatorComponent } from './costcalculator/costcalculator.component';
import { CarriersandservicesComponent } from './carriersandservices/carriersandservices.component';



const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"joinus",component:JoinusComponent},
  {path:"login",component:LoginComponent},
  {path:"footer",component:FooterComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"pricing",component:PricingComponent},
  {path: "howitswork",component:HowitsworkComponent},
  {path: "aboutus",component:AboutusComponent},
  {path: "sidebar",component:SidebarComponent},
  {path:"dashbord",component:DashbordComponent},
  {path:"myaddress",component:MyaddressComponent},
  {path:"mymailbox",component:MymailboxComponent},
  {path:"shipmenthistory",component:ShipmenthistoryComponent},
  {path:"billing",component:BillingComponent},
  {path:"creditcard",component:CreditcardComponent},
  {path:"myaccount",component:MyaccountComponent},
  {path:"updatepersonaldetails",component:UpdatepersonaldetailsComponent},
  {path:"changepassword",component:ChangepasswordComponent},
  {path:"addressbook",component:AddressbookComponent},
  {path:"costcalculator",component:CostcalculatorComponent},
  {path:"carriersandservices",component:CarriersandservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
