import { Injectable } from '@angular/core';

interface IReserved{
  name: string;
  amount: number;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class TrolleyInteractionService {
  public sumOfAllReserved :number = 0;
  public reservedHolidays = new Array<IReserved>();
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

  setReservedHolidays(holidays: Array<IReserved>){
    this.reservedHolidays = holidays
  }
}
