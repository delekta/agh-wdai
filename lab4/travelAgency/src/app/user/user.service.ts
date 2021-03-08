import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {WebsiteUser} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  daneRef: AngularFireList<Object>;

  constructor(private db: AngularFireDatabase) { 
    this.daneRef = db.list("users");
  }

  createUser(user: WebsiteUser){
    this.daneRef.push(user)
  }

  deleteUser(key: string){
    this.daneRef.remove(key)
  }

  getUser(key: string){
    // this.daneRef.child(key)
  }
}
