import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface IHoliday{
  name: string,
  country: string,
  startDate: Date,
  endDate: Date,
  price: number,
  maxPlaces:  number,
  description: string,
  imgSrc: string,
  rating: number,
}

interface IReserved{
  name: string;
  amount: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private _elementToAddSource = new Subject<IHoliday>()
  elementToAdd$ = this._elementToAddSource.asObservable(); 

  private _updatedDataToTrolley = new Subject <Array<IReserved>>()
  dataToShow$ = this._updatedDataToTrolley.asObservable()
  constructor() { }

  sendElement(element: IHoliday){
    this._elementToAddSource.next(element)
  }

  sendReservedHolidays(element2){
    this._updatedDataToTrolley.next(element2)
  }
}
