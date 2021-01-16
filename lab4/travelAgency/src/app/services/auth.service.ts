import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase'
import {User} from '../logging/user'
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>
  // User przeze mnie stworzony missing properties
  readonly authState$: Observable <User | null> = this.angularFirebaseAuth.authState
  
  constructor(private angularFirebaseAuth: AngularFireAuth, private router: Router) {
    angularFirebaseAuth.authState.subscribe(auth => {
      if(auth){
        alert("Zalogowano" + auth.displayName)

      }
      else{
        alert("Wylogowano")
      }
    })
   }

   SignUp(email: string, password: string){
     this.angularFirebaseAuth
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            this.router.navigate(['logging']);
            console.log("udało się zarejestrować", res);
          })
          .catch(error =>{
            alert("Nie udało się zarejestrować")
          })
   }

   SignIn(email: string, password: string){
     this.angularFirebaseAuth.signInWithEmailAndPassword(email, password)
     .then((result) => {
        this.router.navigate(['holidaysOffer']);
        // this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
   }

   SignOut() {
    return this.angularFirebaseAuth.signOut().then(() => {
      this.router.navigate(['logging']);
    })
  }

   getUser(){
     var user = this.angularFirebaseAuth.currentUser
     if(user){
       if(user != null){
         console.log(user);
         
       }else{
         console.log("user wylogowany");
         
       }
     }
   }

   testAuth(){
     this.angularFirebaseAuth.onAuthStateChanged((user) =>{
       if(user)
        console.log(user);
        else
          console.log("wylogowany");
          
        
     })
   }
}
