import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';


@Component({
  selector: 'app-releaseorder',
  templateUrl: './releaseorder.component.html',
  styleUrls: ['./releaseorder.component.css']
})
export class ReleaseorderComponent {
  public releaseorder :FormGroup;

  constructor (private formbuilder : FormBuilder){
    this.releaseorder =this.formbuilder.group({
     releaseorder:["",[Validators.required]],
    });
  }
   
  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.releaseorder.valid) 
    {this.releaseorder.markAllAsTouched();}
    console.log();

    }
  
}

