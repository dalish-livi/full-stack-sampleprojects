import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
 
 
  
  activeButton: string='';
  setActiveButton(button: string): void {
    this.activeButton = button;
  }

  ngOnInit() {
    this.activeButton = 'shippingpartner';
  }
  
}
