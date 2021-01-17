import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { InteractionService } from '../services/interaction.service';
import {Holiday} from '../holidays-offer-element/holiday'
import { HolidaysService } from '../services/holidays.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newHoliday = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.pattern("[A-Za-z ]*")]),
    country: new FormControl(null, [Validators.required, Validators.pattern("[A-Za-z]*")]),
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.pattern("[1-9]{1}[0-9]*")]),
    maxPlaces: new FormControl(null, [Validators.required, Validators.pattern("[1-9]{1}[0-9]*")]),
    description: new FormControl(null, Validators.required),
    imgSrc: new FormControl("", Validators.required),
  })

  @ViewChild('startDate') startDate: ElementRef;
  @ViewChild('endDate') endDate: ElementRef;

  @Output() public addHolidayElement = new EventEmitter;

  constructor(private _interaction: InteractionService, private _interactionHolidaysService: HolidaysService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.addHolidayElement.emit(this.createHolidayElement(this.newHoliday.value))
    this._interaction.sendElement(this.createHolidayElement(this.newHoliday.value))
    this.sendHolidayToDatabase(this.createHolidayElement(this.newHoliday.value))
    this.newHoliday.reset();
  }

  createHolidayElement(form: any){
    var res = <Holiday>{
      name: form?.name.toLowerCase(),
      country: form?.country.toLowerCase(),
      startDate: form.startDate,
      endDate: form.endDate,
      price: parseInt(form?.price),
      maxPlaces: parseInt(form?.maxPlaces),
      description: form?.description,
      imgSrc: form?.imgSrc,
      rating: 0
    };

    return res
  }

  areDatesValid(){
    if(this.startDate.nativeElement.value >= this.endDate.nativeElement.value){
      return false;
    }
    return true;
  }

  sendHolidayToDatabase(holiday: Holiday){
    this._interactionHolidaysService.createHoliday(holiday)
  }

}
