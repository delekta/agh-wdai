import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Student } from '../customers/student';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 
  private dbPath = '/students';
  customersRef: AngularFirestoreCollection<Student> = null;

  constructor(private db: AngularFirestore) {
    this.customersRef = db.collection(this.dbPath)
  }

  //works
  createCustomer(customer: Student): void {
    this.customersRef.add({...customer})
  }

  updateCustomer(key: string, value: any): Promise<void> {
   return this.customersRef.doc(key).update(value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.doc(key).delete()
  }

  getCustomersList(): AngularFirestoreCollection<Student>  {
    return this.customersRef;
  }

  deleteAll() {
    const keys = Object.keys(this.customersRef);
    keys.forEach(key => {
      console.log(key);
      
      this.customersRef.doc(key).delete();
    })
  }
    
}
