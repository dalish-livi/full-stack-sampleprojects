import { Component } from '@angular/core';
import { AddressService } from '../servicefile/address.service';
@Component({
  selector: 'app-carriersandservices',
  templateUrl: './carriersandservices.component.html',
  styleUrls: ['./carriersandservices.component.css']
})
export class CarriersandservicesComponent {

  countries: string[]=[];
  selectedCountry: string="";
  selectedServices: any;
  selectedService: any;

  constructor(private add: AddressService) {}

  ngOnInit() {
    this.countries = this.add.countrie();
  }

  displayServiceName() {
    this.selectedServices = this.add.ServicesByCountry(this.selectedCountry);
    console.log(this.selectedCountry);   
    console.log(this.selectedServices); 
  }

  showServiceDetails(service: any) {
    this.selectedService = service;
    console.log(service);
    
  }
 
}

