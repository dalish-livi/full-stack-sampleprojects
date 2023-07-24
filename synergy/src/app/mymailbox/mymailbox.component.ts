import { Component } from '@angular/core';
import { AmountService } from '../servicefile/amount.service';

@Component({
  selector: 'app-mymailbox',
  templateUrl: './mymailbox.component.html',
  styleUrls: ['./mymailbox.component.css']
})
export class MymailboxComponent {
  activeButton: string='';

  tracking : any[]=[];
  searchTerm: string = '';
  selectedParcel: any = null;
  error:string="";

  constructor(private track:AmountService){
    this.tracking =this.track.tracking();
  }

  ngOnInit() {
    this.activeButton = 'pendingprocess';
    
  }
  
  setActiveButton(button: string): void {
    this.activeButton = button;
    
  }


  submit(): void {
    const matchedParcel = this.tracking.find(parcel =>
      parcel.trackingNumber === this.searchTerm
    );
  
    if (matchedParcel) {
      this.selectedParcel = matchedParcel;
      this.error='';
    } else {
      this.error = 'Enter a valid tracking number.';
    }
  
  }

}
