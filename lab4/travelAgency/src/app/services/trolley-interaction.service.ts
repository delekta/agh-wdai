import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Holiday } from '../holidays-offer-element/holiday';
import {ReservedHoliday} from '../holidays-offer/reservedHoliday'

@Injectable({
  providedIn: 'root'
})
export class TrolleyInteractionService {
  public sumOfAllReserved :number = 0;
  public reservedHolidays = new Array<ReservedHoliday>();

  // Needed To Update Counter Of Reserved Holidays From Multiple Places
  private _sumOfAllReserved = new Subject<number>()
  numberOfReserved$ = this._sumOfAllReserved.asObservable(); 
  
  constructor() { }

  sendSumOfAllReserved(sum:number){
    this._sumOfAllReserved.next(sum)
  }

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

  updateTrolley(data2){
    this.sumOfAllReserved += data2.value; 
    this.sendSumOfAllReserved(this.sumOfAllReserved)
    this.updateReservedHolidays(data2)
  }

  updateReservedHolidays(data2){
    if(this.reservedHolidays.find(e => (e.name == data2.holiday.name))){
      const obj: ReservedHoliday = this.reservedHolidays.find(e => (e.name == data2.holiday.name))
      if(data2.value == 1){
        obj.amount = obj.amount + 1
      }
      else if(data2.value == -1){
        obj.amount = obj.amount - 1 
        if(obj.amount == 0){
          this.reservedHolidays = this.reservedHolidays.filter(e => e.name != obj.name)
        }
      } // we remove whole element
      else{
        this.reservedHolidays = this.reservedHolidays.filter(e => e.name != obj.name)
      }
    }
    else{
      if(data2.value == 1){
        this.reservedHolidays.push({
          name: data2.holiday.name,
          amount: 1,
          price: data2.holiday.price
        })
      }
    }
  }
}
