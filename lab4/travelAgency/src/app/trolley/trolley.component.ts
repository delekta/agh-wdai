import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { TrolleyInteractionService } from '../services/trolley-interaction.service';

interface IReserved{
  name: string;
  amount: number;
  price: number;
}

@Component({
  selector: 'app-trolley',
  templateUrl: './trolley.component.html',
  styleUrls: ['./trolley.component.css']
})
export class TrolleyComponent implements OnInit {
  constructor(private _interactionTrolleyService: TrolleyInteractionService) { }
  public reservedHolidays = [];
  public sum: number = 0;
  
  ngOnInit(): void {
    this.reservedHolidays = this._interactionTrolleyService.getReservedHolidays();
    console.log(this.reservedHolidays);
    this.updateSum();
  }

  updateSum(){
    this.sum = 0
    for(let holiday of this.reservedHolidays){
      this.sum += holiday.amount * holiday.price;
    }
  }

}
