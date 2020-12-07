import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public counter: number = 0;
  @Input('parentBlockClick') public disableBtn: boolean;

  @Output() public childEmitter = new EventEmitter;
  @Output() public childBlockEmitter = new EventEmitter;

  incrementAndSend(){
    this.counter++;
    this.childEmitter.emit(this.counter)
  }

  resetAndSend(){
    this.disableBtn = false;
    this.childBlockEmitter.emit(this.disableBtn)

    this.counter = 0;
    this.childEmitter.emit(this.counter)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
