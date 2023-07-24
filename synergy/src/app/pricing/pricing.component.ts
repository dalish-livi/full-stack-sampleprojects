import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  public showModel = {
    showbtn : false,
  };
  closebtn(){
    this.showModel.showbtn  =false;
  }
  btn1ImagesVisible = false;
  btn2ImagesVisible = false;
  btn3ImagesVisible = false;

  showImages(btnNumber: number) {
    this.btn1ImagesVisible = false;
    this.btn2ImagesVisible = false;
    this.btn3ImagesVisible = false;

    if (btnNumber === 1) {
      this.btn1ImagesVisible = true;
    } else if (btnNumber === 2) {
      this.btn2ImagesVisible = true;
    } else if (btnNumber === 3) {
      this.btn3ImagesVisible = true;
    }

}
}