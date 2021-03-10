import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase';
import { UserInteractionService } from '../services/user-interaction.service';
import {WebsiteUser} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  daneRef: AngularFireList<Object>;

  constructor(private db: AngularFireDatabase, private currentUser: UserInteractionService) { 
    this.daneRef = db.list("users");
  }

  createUser(key: string, user: WebsiteUser){
    this.db.object(`/users/${key}`).set(user)
  }

  deleteUser(key: string){
    this.daneRef.remove(key)
  }

  getUser(key: string){
    this.daneRef.snapshotChanges().forEach(changes => {
      changes.forEach(ch => {
        if(ch.payload.key == key){
          this.currentUser.sendCurrentUser(<WebsiteUser>ch.payload.val())
        }
      } )
    })
  }
}
