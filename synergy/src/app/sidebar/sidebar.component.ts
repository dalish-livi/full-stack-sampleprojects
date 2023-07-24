import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen: boolean = true;
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  
  constructor(){}

}
