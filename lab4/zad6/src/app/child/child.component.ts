import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public counter: number = 0;
  @Input('parentBlockClick') public blockClick: boolean;

  @Output() public childEmitter = new EventEmitter;

  incrementAndSend(){
    this.counter++;
    this.childEmitter.emit(this.counter)
  }

  resetAndSend(){
    this.counter = 0;
    this.childEmitter.emit(this.counter)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
