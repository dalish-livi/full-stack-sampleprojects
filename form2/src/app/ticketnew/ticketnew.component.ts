import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ticketnew',
  templateUrl: './ticketnew.component.html',
  styleUrls: ['./ticketnew.component.css']
})
export class TicketnewComponent {
  slides: string[];
  i: number;

  shows:string[];
  j:number;


  constructor() {
    this.i = 0;
    this.slides = [
      'assets/img/viduthalai.jpg',
      'assets/img/1920_400.jpg',
      'assets/img/accidental.jpg'
  
    ];

    this.j=0;
    this.shows=[
      'assets/img/6.jpg',
      'assets/img/7.jpg',
      'assets/img/8.jpg',
      'assets/img/10.jpg'
    ]
    
  }
  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }


  getshows() {
    return this.shows[this.i];
  }



}
