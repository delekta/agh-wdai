import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signing-up',
  templateUrl: './signing-up.component.html',
  styleUrls: ['./signing-up.component.css']
})
export class SigningUpComponent implements OnInit {
  userData = new FormGroup({
    userName: new FormControl(null, Validators.required),
    eMail: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })
  constructor(private _authenticationService: AuthService) { }

  ngOnInit(): void {
    this.userData.reset();
  }


  signUp(){
    console.log("komponent rejestracja");
    this._authenticationService.SignUp(this.userData.value.eMail, this.userData.value.password, this.userData.value.userName)
  }

}
