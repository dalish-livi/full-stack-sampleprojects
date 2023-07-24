import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmountService } from '../servicefile/amount.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],

})
export class BillingComponent {

  amount: number=0
  constructor(private router: Router,private amt:AmountService) {
    
  }

  submit() {
    if (this.amount>= 1)
    {
      this.router.navigate(['/creditcard']);
      console.log(this.amount);
    }
  }

}
