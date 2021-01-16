import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  userData = new FormGroup({
    eMail: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })
  constructor(private _authenticationService: AuthService) { }

  //Mozna zmienić tak zeby nie uzwyac forms'a a ngModel, moze to i lepsze, zobacze jak za czasem
  ngOnInit(): void {
  }

  signIn(){
    console.log("komponent logowanie");
    this._authenticationService.SignIn(this.userData.value.eMail, this.userData.value.password)
    // this.userData.value() = '';
  }
}
