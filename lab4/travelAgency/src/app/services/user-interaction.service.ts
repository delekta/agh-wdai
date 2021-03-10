import { Injectable } from '@angular/core';
import { WebsiteUser } from '../user/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {
  private _currentUser = new Subject<WebsiteUser>();
  user$ = this._currentUser.asObservable()

  constructor() { }

  sendCurrentUser(user: WebsiteUser){
    this._currentUser.next(user)
  }
}
