import { Component, Input, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() public title:string = "WithOut Title";
  @Input() public label: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() public data: number[] = [350, 450, 100];
  @Input() public color: string[] = ['#9E120E','#FF5800','#FFB414'];

  // Doughnut
  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[];

  constructor() {
  }
  ngOnInit(): void {
    this.doughnutChartLabels = this.label;
    this.doughnutChartData = [this.data];
    this.colors = [{backgroundColor: this.color}];
  }

}
