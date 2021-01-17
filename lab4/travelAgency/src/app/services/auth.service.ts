import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase'
import {User} from '../logging/user'
import { from, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userEmail = new Subject<string>()
  email$ = this._userEmail.asObservable(); 

  userData: Observable<firebase.User>
  
  readonly authState$: Observable <User | null> = this.angularFirebaseAuth.authState
  
  constructor(private angularFirebaseAuth: AngularFireAuth, private router: Router) {
    angularFirebaseAuth.authState.subscribe(auth => {
      // console.log(this.getEmail())
      if(auth){
        this.sendEmail(localStorage.getItem("email"))
        alert("Jesteś zalogowany")

      }
      else{
        localStorage.removeItem("email")
        this.sendEmail(localStorage.getItem("email"))
        alert("Jesteś wylogowany")
      }
    })
   }

   SignUp(email: string, password: string){
     this.angularFirebaseAuth
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            this.router.navigate(['holidaysOffer']);
            var email = res.user.email
            localStorage.setItem("email", email);
            console.log("Udało się zarejestrować");
          })
          .catch(error =>{
            alert("Nie udało się zarejestrować")
          })
   }

   SignIn(email: string, password: string){
     this.angularFirebaseAuth.signInWithEmailAndPassword(email, password)
     .then((result) => {
        this.router.navigate(['holidaysOffer']);
        var email = result.user.email
        localStorage.setItem("email", email);
    }).catch((error) => {
      window.alert(error.message)
    })
   }

   SignOut() {
    return this.angularFirebaseAuth.signOut().then(() => {
      this.router.navigate(['logging']);
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
}
