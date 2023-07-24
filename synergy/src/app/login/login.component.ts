import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login:FormGroup;

  visible:boolean = true;
  changetype:boolean =true;

  constructor(private formBuilder:FormBuilder,private router:Router){
    this.login=formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,]],
   
    })
  }

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  submit() {
    if (this.login.valid) {
      const email = this.login.controls['email'].value;
      const password = this.login.controls['password'].value;
      if (email === 'bala998@gmail.com' && password === 'qwe123@#') {
        console.log('Login successful!');
        alert('login successfuly')
        this.router.navigate(['/dashbord']);

      } else {
        console.log('Invalid email or password');
        
      }
    } else {
      this.login.markAllAsTouched();
    }
  }
   

}

