import { Component } from '@angular/core';

@Component({
  selector: 'app-serviceauth',
  templateUrl: './serviceauth.component.html',
  styleUrls: ['./serviceauth.component.css']
})
export class ServiceauthComponent {

  constructor(){}

  vac(){
    return [
        {
            id: 1,
            name: "car"
        },
        {
            id: 2,
            name: "bike"
        }
    ]
}

  brand(){
    return [
        {
            id: 1,
            name: "BMW"
        },
        {
            id: 1,
            name: "audi"
        },
        {
            id: 2,
            name: "yamaha"
        },
        {
            id: 2,
            name: "hero"
        }
    ]
}




model(){
  return [
      {
          id: 1,
          name: "BMW",
          names :"m1"
      },
      {
          id: 1,
          name: "BMW",
          names:"m2"
      },
      {
          id: 1,
          name: "audi",
          names:"a1"
      },
      {
          id: 1,
          name: "audi",
          names:"A2"
      },
      {
        id: 2,
        name: "yamaha",
        names:"FZ"
    }
  ]
}

objectData()
{
   return [
    {
    names:"FZ", 
    name:'fz',
    model:'Fz S V3',
    CC:150, 
    occupation:2 
   },
   {
    names :"m1",
    name:'BMW',
    model:'M1',
    CC:350, 
    occupation:4 
   },
   {
    names :"m2",
    name:'BMW',
    model:'M2',
    CC:350, 
    occupation:4 
   },
   {
    names :"a1",
    name:'audi',
    model:'A1',
    CC:345, 
    occupation:4 
   },
   {
    names :"A2",
    name:'audi',
    model:'A2',
    CC:700, 
    occupation:4 
   },
]
}



}
