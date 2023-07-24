import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public regsition :FormGroup
  public login:FormGroup

  constructor(private formbuilder:FormBuilder){
    this.regsition =formbuilder.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      email:   ["",[Validators.required]],
      mobileno: [, [Validators.required]],
      emailid: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmpassword:["",[Validators.required]]
      
    });
    
     this.login=formbuilder.group({
      EMAIL: ["", [Validators.required]],
      passcode: ["", [Validators.required]],

     });

  }

   
  sub2(){
    if (!this.regsition.valid)
     { this.regsition.markAllAsTouched(); }
  }

  sub1(){
    if (!this.login.valid)
     { this.login.markAllAsTouched(); }
  }
}

  