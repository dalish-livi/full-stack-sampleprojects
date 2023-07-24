import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmountService {


  tracking(){
    return[
      {
        trackingNumber: 'ABC123',
        warehouse: 'Warehouse A',
        arrivedAt: '2023-05-20',
        expectedReadyDate: '2023-05-25'
      },
      {
        trackingNumber: '123456',
        warehouse: 'Warehouse B',
        arrivedAt: '2023-05-22',
        expectedReadyDate: '2023-05-27'
      },
    ];
  }

}
