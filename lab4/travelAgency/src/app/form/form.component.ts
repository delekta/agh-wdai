import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

interface IHoliday{
  name: string,
  country: string,
  startDate: Date,
  endDate: Date,
  price: number,
  maxPlaces:  number,
  description: string,
  imgSrc: string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newHoliday = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.pattern("[A-Za-z]*")]),
    country: new FormControl(null, [Validators.required, Validators.pattern("[A-Za-z]*")]),
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.pattern("[1-9]{1}[0-9]*")]),
    maxPlaces: new FormControl(null, [Validators.required, Validators.pattern("[1-9]{1}[0-9]*")]),
    description: new FormControl(null, Validators.required),
    imgSrc: new FormControl("https://lh3.googleusercontent.com/proxy/oSWd_ZiTf5lcFNX_Dtn2rbJGW14qpTj6rVjVuIv8DQFNxODZzBLO-ptLsIlYXb9vB9mqQfB0q2Mi7GpiH_jOd2d4g-nSsja1XgNkEDdOsDBBf9sp8hkc70XC7IDGmobfIsx0UaSK6qk-B8Q3cOf6OaRHPrGDp5uriqX_O9gOX2pBxKXczN0ymOQHBDBbHKER6HDr3blckLcE4Mn2sU-0iR26D6iJoVx8UqwWTWH7Oh2itzE6nSJ3zQ8AJEBk6_Jgs3SnUnhtDZ3QUvYywKJdKlC3QComMLGFTDb_AAg_9VJXYoFnFV1jHVVmUGeUAvX4S18zR4QT0Oa23thfssGKBRp8sBAosqaM6HevjmjpY23JR_RvoKaheVGIT58OGr-h1UxkG1KTBeyHk2fz7pZ7z7zkNBYlBuqhWo3NaK4lbt5EN_cjA5HdOuXiZHaH3NFrPadXHN53L3ZeACkAYb7wPRmME-1hhYuWnCbHA-XAPkq7IQ75CrmD5V_LokdWGHEUgg1M0xMHejJNwnZAli7ufuy8zrzbUQli3Z3SB163s2_tI9cfIXoJHzbiiQVDXjQukqpoAuM", Validators.required),
  })

  @ViewChild('startDate') startDate: ElementRef;
  @ViewChild('endDate') endDate: ElementRef;

  @Output() public addHolidayElement = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addHolidayElement.emit(this.createHolidayElement(this.newHoliday.value))
    // Problem - znika defaultowy sort przy submicie
    this.newHoliday.reset();
  }

  createHolidayElement(form: any){
    var res = <IHoliday>{
      name: form?.name,
      country: form?.country,
      startDate: form?.startDate,
      endDate: form?.endDate,
      price: form?.price,
      maxPlaces: form?.maxPlaces,
      description: form?.description,
      imgSrc: form?.imgSrc
    };
    return res
  }

  areDatesValid(){
    if(this.startDate.nativeElement.value >= this.endDate.nativeElement.value){
      return false;
    }
    return true;
  }

}
