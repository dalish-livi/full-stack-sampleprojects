import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event) {
    this.scrolled = window.scrollY > 0;
  }

}
