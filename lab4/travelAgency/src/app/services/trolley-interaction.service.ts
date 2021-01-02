import { Injectable } from '@angular/core';
import {ReservedHoliday} from '../holidays-offer/reservedHoliday'

@Injectable({
  providedIn: 'root'
})
export class TrolleyInteractionService {
  public sumOfAllReserved :number = 0;
  public reservedHolidays = new Array<ReservedHoliday>();
  constructor() { }

  getSumOfAllReserved(){
    return this.sumOfAllReserved
  }

  getReservedHolidays(){
    return this.reservedHolidays
  }

  setSumOfAllReserved(sum: number){
    this.sumOfAllReserved = sum
  }

  setReservedHolidays(holidays: Array<ReservedHoliday>){
    this.reservedHolidays = holidays
  }
}
