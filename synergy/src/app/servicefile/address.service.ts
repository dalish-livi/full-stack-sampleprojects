import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  branch(){
    return [
      {
        id :1,
        state:"NewJersey"
      },
      {
        id:2,
        state:"DELAWARE"
      },
      {
        id:3,
        state:"MIDDLESEX"
      },
      {
        id:4,
        state:"ISTANBUL"
      }
    ]
  }
address(){
  return[
    {
      id:1,
      addressline1:"order.in",
      addressline2:"No/6  West Road",
      pincode: "07512",
      city:"TOTOWA",
      state:"NewJersey",
      phone:9034568712
    },
    {
      id:2,
      addressline1:"order.in",
      addressline2:"2/290 Trold Road",
      pincode:19713,
      city:"NEWARK",
      state:"DELAWARE",
      phone:9034590876
    },
    {
      id:3,
      addressline1:"order.in",
      addressline2:"19 old post office road",
      pincode:"UB78JD",
      city:"WEST DRAYTON",
      state:"MIDDLESEX",
      phone:9903412569
    },
    {
      id:4,
      addressline1:"order.in",
      addressline2:"19 old road",
      pincode:"198244",
      city:"ISTANBUL",
      state:"ISTANBUL",
      phone:9903412569
    },
  ]
}
countrie() {
  return [
    'Luxembourg',
    'India',
    'Ireland',
    'Qatar',
    'Switzerland',
    'Norway',
    'United Arab Emirates',
    'Singapore',
    'United States',
    'San Marino'
  ];
}


UNIT(){
  return[
    'Lb-inch',
    'Kg-cm'
  ]
}

service() {
  return [
    {
      id: 1,
      countrie: 'Luxembourg',
      sevicename: 'DHL',
      estamiteddate: '2-5',
      totalWeight: 'No upper Limits',
      tracking: 'Available',
    },
    {
      id: 1,
      countrie: 'Luxembourg',
      sevicename: 'TNT',
      estamiteddate: '2-6',
      totalWeight: 'No upper Limits',
      tracking: 'Available',
    },
    {
      id: 1,
      countrie: 'India',
      sevicename: 'FedEx',
      estamiteddate: '2-6',
      totalWeight: 'No upper Limits',
      tracking: 'Available',
    },
  ];
}

ServicesByCountry(country: string) {
  return this.service().filter(service => service.countrie === country);
}
}
