import { Injectable } from '@angular/core';

import { Student } from '../customers/student';

import { AngularFireDatabase, AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  daneRef: AngularFireObject<any>;
 
  constructor(private db: AngularFireDatabase) { }


  createCustomer(customer: Student): void {
  
  }

  updateCustomer(key: string, value: any) {
   
  }

  deleteCustomer(key: string) {
 
  }

  getCustomersList()  {
  
  }

   deleteAll() {
   }
    
}
