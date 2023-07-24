import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { ServiceauthComponent } from '../serviceauth/serviceauth.component';


@Component({
  selector: 'app-selectbutton',
  templateUrl: './selectbutton.component.html',
  styleUrls: ['./selectbutton.component.css']
})
export class SelectbuttonComponent {
  constructor(private auth:ServiceauthComponent){ }


    vac: any = [];
    brand: any = [];
    model: any=[]; 
   objectData: any=[];



    ngOnInit(){
        this.vac = this.auth.vac();
       
    }


    onSelect(vac){
       {
        this.brand = this.auth.brand().filter(e => e.id == vac.target.value);
        this.model = [];
        this.objectData=[];
      }
    }
     
    Select(brand){
       {
        this.model = this.auth.model().filter(e => e.name == brand.target.value);
        this.objectData=[];
      }
    }

    select(model){
      this.objectData= this.auth.objectData().filter(e => e.names == model.target.value);

    }
    

  
  }
  

