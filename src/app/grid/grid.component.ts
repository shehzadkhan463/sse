import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  buttons: number[];
  isHidden: boolean;
  @Output() buttonClicked: EventEmitter<number>;
  constructor() {
    this.isHidden = false;
    this.buttonClicked = new EventEmitter<number>();
  }
  
  ngOnInit(): void {
    this.buttons = [0, 1, 2, 3];
  }

  onButtonClicked(buttonIndex: number) {
    this.buttonClicked.emit(buttonIndex);
  }

}
