import { Component } from '@angular/core';
import { AddressService } from '../servicefile/address.service';

@Component({
  selector: 'app-costcalculator',
  templateUrl: './costcalculator.component.html',
  styleUrls: ['./costcalculator.component.css']
})
export class CostcalculatorComponent {

  branch:any[]=[];
  coun: string[]=[];
  unit : string[]=[];

  parcels: any[] = [
    {
      weight: null,
      length: null,
      width: null,
      height: null,
      value: null
    }
  ];

  constructor(private add:AddressService){}

  ngOnInit(){
    this.branch = this.add.branch(); 
    this.coun=this.add.countrie(); 
    this.unit=this.add.UNIT();
}


  addNewParcel() {
    this.parcels.push({
      weight: null,
      length: null,
      width: null,
      height: null,
      value: null
    });
  }

  removeParcel(index: number) {
    this.parcels.splice(index);
  }

}

