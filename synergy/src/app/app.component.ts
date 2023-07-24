import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutergarudService } from './routergarud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'synergy';
  constructor( public router :Router,private routerGuardService: RoutergarudService){}

  isLoggedIn() {
    return this.routerGuardService.isLoggedIn();
  }
}
