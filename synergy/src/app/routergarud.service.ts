import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutergarudService {

  constructor() { }
  isLoggedIn(){
  return true;
}

}

