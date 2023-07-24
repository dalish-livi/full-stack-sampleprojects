import { Component } from '@angular/core';
import { AddressService } from '../servicefile/address.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  branch:any=[];
  address:any=[];

  constructor(private ADdress:AddressService){

  }
 

  ngOnInit(){
    this.branch = this.ADdress.branch();  
}

  onSelect(branch){
    {
     this.address = this.ADdress.address().filter(e => e.state == branch.target.value);
   }
 }
  

}
