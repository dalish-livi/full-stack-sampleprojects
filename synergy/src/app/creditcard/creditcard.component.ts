import { Component } from '@angular/core';
import { AmountService } from '../servicefile/amount.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent {

  cardNumber: string="";
  expiryDate: string="";
  cvv: string="";

 
  makePayment() {
    alert("paid sucessfuly")
  }
  
  

}
