import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

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
  public reservedHolidays = null;
  public sum: number = 0;

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService.dataToShow$.subscribe(
      d => {
        this.reservedHolidays = d;
        console.log(this.reservedHolidays);
        this.updateSum();
      }
    )
  }

  updateSum(){
    this.sum = 0
    for(let holiday of this.reservedHolidays){
      this.sum += holiday.amount * holiday.price;
    }
  }

}
