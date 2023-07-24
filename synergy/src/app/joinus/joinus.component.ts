import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent {
  public joinus:FormGroup;

  visible:boolean = true;
  changetype:boolean =true;

  constructor(private formBuilder:FormBuilder){
    this.joinus=formBuilder.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,]],
      confirmpassword:["",[Validators.required]]
    })
  }
  submit(){
    if (!this.joinus.valid){
      (this.joinus.markAllAsTouched())
    }
     
    
  }

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

}
