import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase'
import {User} from '../logging/user'
import {WebsiteUser} from '../user/user'
import { from, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { UserInteractionService } from './user-interaction.service';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  flag:boolean = true;
  private _userEmail = new Subject<string>()
  email$ = this._userEmail.asObservable(); 

  userData: Observable<firebase.User>
  
  readonly authState$: Observable <User | null> = this.angularFirebaseAuth.authState
  
  constructor(private angularFirebaseAuth: AngularFireAuth, private router: Router, private userService: UserService, private currentUser: UserInteractionService) {
    angularFirebaseAuth.authState.subscribe(auth => {
      // console.log(this.getEmail())
      if(auth){
        this.updateCurrentUser()
        alert("Jesteś zalogowany")
      }
      else{
        this.updateCurrentUser()
        alert("Jesteś wylogowany")
      }
    })
   }

   SignUp(email: string, password: string, userName: string){
     this.flag = false;
     this.angularFirebaseAuth
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            this.router.navigate(['logging']);
            // Add User To Firebase
            var user = new WebsiteUser(userName, email)
            var key = res.user.uid
            this.userService.createUser(key, user)
            alert("Udało się zarejestrować");
            this.SignOut()
          })
          .catch(error =>{
            alert("Nie udało się zarejestrować" + error)
          })
   } 

   SignIn(email: string, password: string){
     this.angularFirebaseAuth.signInWithEmailAndPassword(email, password)
     .then((result) => {
        this.router.navigate(['holidaysOffer']);
        this.updateCurrentUser()
    }).catch((error) => {
      window.alert(error.message)
    })
   }

   SignOut() {
    return this.angularFirebaseAuth.signOut().then(() => {
      this.router.navigate(['logging'])
      this.updateCurrentUser();
    })
  }

  sendEmail(email: string){
    this._userEmail.next(email)
  }

   testAuth(){
     this.angularFirebaseAuth.onAuthStateChanged((user) =>{
       if(user)
        console.log(user);
        else
          console.log("wylogowany");
     })
   }

   changePersistence(mode: string){
     var session:any
     if(mode === "s"){
        session = firebase.auth.Auth.Persistence.SESSION; 
     }
     else if (mode === "n"){
      session = firebase.auth.Auth.Persistence.NONE; 
     }
     else{
      session = firebase.auth.Auth.Persistence.LOCAL; 
     }
     return this.angularFirebaseAuth.setPersistence(session).then(() => {
      
      });
   }

   updateCurrentUser(){
     var key;
    if (firebase.auth().currentUser != null){
      key = firebase.auth().currentUser.uid
    }else{
      key = null;
    }
    this.userService.getUser(key)    
   }
}
