import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Holiday} from '../holidays-offer-element/holiday'

interface IReserved{
  name: string;
  amount: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private _elementToAddSource = new Subject<Holiday>()
  elementToAdd$ = this._elementToAddSource.asObservable(); 

  private _updatedDataToTrolley = new Subject <Array<IReserved>>()
  dataToShow$ = this._updatedDataToTrolley.asObservable()
  constructor() { }

  sendElement(element: Holiday){
    this._elementToAddSource.next(element)
  }

  sendReservedHolidays(element2){
    this._updatedDataToTrolley.next(element2)
  }
}
