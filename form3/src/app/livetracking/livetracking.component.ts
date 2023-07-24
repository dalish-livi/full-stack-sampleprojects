import { Component } from '@angular/core';

@Component({
  selector: 'app-livetracking',
  templateUrl: './livetracking.component.html',
  styleUrls: ['./livetracking.component.css']
})
export class LivetrackingComponent {
public showModel = {
    showbtn: false,
  };

  


closebtn(){
  this.showModel.showbtn =false;
}
}
