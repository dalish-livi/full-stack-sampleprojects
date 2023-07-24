import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SynergyComponent } from './synergy/synergy.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CoffeeshopComponent } from './coffeeshop/coffeeshop.component';
import { TicketnewComponent } from './ticketnew/ticketnew.component';
import { SelectbuttonComponent } from './selectbutton/selectbutton.component';
import { FormsModule } from '@angular/forms';
import { ServicecompComponent } from './servicecomp/servicecomp.component';
import { ServiceauthComponent } from './serviceauth/serviceauth.component';

@NgModule({
  declarations: [
    AppComponent,
    SynergyComponent,
    HeaderComponent,
    LoginComponent,
    CoffeeshopComponent,
    TicketnewComponent,
    SelectbuttonComponent,
    ServicecompComponent,
    ServiceauthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServiceauthComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
