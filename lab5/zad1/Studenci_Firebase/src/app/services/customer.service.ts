import { Injectable } from '@angular/core';

import { Student } from '../customers/student';

import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  daneRef: AngularFireList<Object>;
 
  constructor(private db: AngularFireDatabase) { 
    this.daneRef = db.list("students");
  }

  createCustomer(customer: Student): void {
    this.daneRef.push(customer)
  }

  updateCustomer(key: string, value: any) {
   this.daneRef.update(key, value)
  }

  deleteCustomer(key: string) {
    this.daneRef.remove(key);
  }

  getCustomersList()  {
    return this.daneRef;
  }

   deleteAll() {
     this.daneRef.remove();
   }
    
}
