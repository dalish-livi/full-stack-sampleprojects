import { Component } from '@angular/core';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})
export class AddressbookComponent {

  public showModel = {
    showbtn: false,
  };

closebtn(){
  this.showModel.showbtn =false;
}
}
