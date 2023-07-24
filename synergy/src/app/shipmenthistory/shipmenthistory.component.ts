import { Component } from '@angular/core';
import { AmountService } from '../servicefile/amount.service';

@Component({
  selector: 'app-shipmenthistory',
  templateUrl: './shipmenthistory.component.html',
  styleUrls: ['./shipmenthistory.component.css']
})
export class ShipmenthistoryComponent {

  

  constructor(private tracking:AmountService) {}


}
