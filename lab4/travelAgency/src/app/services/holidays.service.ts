import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Holiday} from '../holidays-offer-element/holiday'

@Injectable({ 
  providedIn: 'root'
})
export class HolidaysService {

  daneRef: AngularFireList<Object>;
 
  constructor(private db: AngularFireDatabase) { 
    this.daneRef = db.list("holidays");
  }

  createHoliday(holiday: Holiday): void {
    this.daneRef.push(holiday)
  }

  updateHoliday(key: string, value: any) {
   this.daneRef.update(key, value)
  }

  deleteHoliday(key: string) {
    this.daneRef.remove(key);
  }

  getHolidaysList()  {
    return this.daneRef;
  }
}