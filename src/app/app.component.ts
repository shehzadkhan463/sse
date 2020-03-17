import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChildren(GridComponent) public gridRefs: QueryList<GridComponent>;
  title = 'sse';
  grids: number[];
  constructor() {

  }

  ngOnInit(): void {
    this.grids = [0, 1, 2, 3];
  }

  onButtonClicked(index: number) {
    const gridComponent: GridComponent = this.gridRefs.find((value: GridComponent, gridIndex: number) => {
      console.log(gridIndex)
      return index === gridIndex
    });
    gridComponent.isHidden = !gridComponent.isHidden;
  }

}
