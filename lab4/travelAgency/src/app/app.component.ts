import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public companyName = "Tu i Tam..."
  constructor(private _authenticationService: AuthService){
  }

  signOut(){
    this._authenticationService.SignOut()
  }
}
