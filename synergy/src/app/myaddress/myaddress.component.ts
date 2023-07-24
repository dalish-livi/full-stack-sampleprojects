import { Component } from '@angular/core';
import { AddressService } from '../servicefile/address.service';

@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.component.html',
  styleUrls: ['./myaddress.component.css']
})
export class MyaddressComponent {

  address:any []=[];

  constructor(private ADdress:AddressService){

    this.address=this.ADdress.address();

  }

}
