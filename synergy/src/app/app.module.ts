import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PricingComponent } from './pricing/pricing.component';
import { HowitsworkComponent } from './howitswork/howitswork.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule, Routes } from '@angular/router';
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
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JoinusComponent,
    LoginComponent,
    FooterComponent,
    HomepageComponent,
    PricingComponent,
    HowitsworkComponent,
    AboutusComponent,
    SidebarComponent,
    DashbordComponent,
    MyaddressComponent,
    MymailboxComponent,
    ShipmenthistoryComponent,
    BillingComponent,
    CreditcardComponent,
    MyaccountComponent,
    UpdatepersonaldetailsComponent,
    ChangepasswordComponent,
    AddressbookComponent,
    CostcalculatorComponent,
    CarriersandservicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
