import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Student } from '../customers/student';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private dbPath = '/students';
  private ids = new Array<string>();

  customersRef: AngularFirestoreCollection<Student> = null;

  constructor(private db: AngularFirestore) {
    this.customersRef = db.collection(this.dbPath)
  }

  createCustomer(customer: Student): void {
    this.customersRef.add({...customer})
  }

  updateCustomer(key: string, value: any): Promise<void> {
   return this.customersRef.doc(key).update(value);
  }

  deleteCustomer(key: string): Promise<void> {
    this.removeId(key);
    return this.customersRef.doc(key).delete()
  }

  getCustomersList(): AngularFirestoreCollection<Student>  {
    return this.customersRef;
  }

  deleteAll() {
    // nie działa do końca poprawnie
    // this.customersRef.snapshotChanges().forEach(student => {
    //   student.forEach(s =>
    //     {
    //       this.deleteCustomer(s.payload.doc.id)
    //     }
    //   )
    // })
    this.ids.forEach(id => {
      this.removeId(id)
      this.deleteCustomer(id)
    })
  }

  addId(id:string){
    if(!this.ids.includes(id)){
      this.ids.push(id);
    }
    // console.log(this.ids);
  }

  removeId(id:string){
    this.ids = this.ids.filter(ID => ID != id);
    // console.log(this.ids);
  }
    
}
