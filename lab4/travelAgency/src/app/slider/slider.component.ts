import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options, ChangeContext, PointerType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent{  
  @Input() value: number;
  @Input() highValue: number;
  @Input() options: Options = {
      floor: 0,
      ceil: 0,
  };
}
