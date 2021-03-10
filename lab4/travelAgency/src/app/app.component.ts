import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserInteractionService } from './services/user-interaction.service';
import { WebsiteUser } from './user/user';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public companyName = "Tu i Tam...";
  public userName: string;
  public userRole: number = 0;
  constructor(private _currentUser: UserInteractionService, private _authenticationService: AuthService, private userService: UserService){
    this._currentUser.user$.subscribe(
      u => {
        if (u != null){
          this.userName = u.name
          this.userRole = u.role
        }else{
          this.userName = null;
          this.userRole = 0
        }
      }
    )
  }

  signOut(){
    this._authenticationService.SignOut()
  }

  changeActive(event: Event, mode: string){
    event.preventDefault();
    // let list = (<HTMLElement>event.currentTarget).parentNode;
    // this.resetList(list);
    // (<HTMLElement>event.currentTarget).classList.add("active")
    this._authenticationService.changePersistence(mode);
    if(mode === 's'){
      alert("Zmieniles tryb na SESSION")
    }else if(mode === 'n'){
      alert("Zmieniles tryb na NONE")
    }
    else{
      alert("Zmieniles tryb na LOCAL")
    }
  }

  // resetList(list){
  //   let aArray: HTMLCollectionOf<HTMLLIElement> = list.getElementsByTagName("a")
  //   for(let i = 0; i < aArray.length; i++){
  //     if(aArray[i].classList.contains("active")){
  //       aArray[i].classList.remove("active");
  //     }
  //   }
  // }
}
