import { Injectable } from '@angular/core';
import { Holiday } from '../holidays-offer-element/holiday';

@Injectable({
  providedIn: 'root'
})
export class DetailsObjectService {
  public holiday: Holiday;
  constructor() { }

  getHoliday(){
    return this.holiday
  }

  setHoliday(h: Holiday){
    this.holiday = h
  }
}
