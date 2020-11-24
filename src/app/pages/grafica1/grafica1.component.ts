import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  
  public labels1: string[] = ['Download Sales1', 'In-Store Sales1', 'Mail-Order Sales1'];
  public labels2: string[] = ['Download Sales2', 'In-Store Sales2', 'Mail-Order Sales2'];
  public labels3: string[] = ['Download Sales3', 'In-Store Sales3', 'Mail-Order Sales3'];
  public labels4: string[] = ['Download Sales4', 'In-Store Sales4', 'Mail-Order Sales4'];

  public data1:number[] = [100, 100, 100];
  public data2:number[] = [150, 600, 250];
  public data3:number[] = [455, 100, 50];
  public data4:number[] = [555, 400, 220];

  public color1: string[] = ['#A8EB12','#789637','#46600B'];
  public color2: string[] = ['#1855B2','#2EAA54','#7B6B12'];
  public color3: string[] = ['#D55712','#4F27C5','#C5277B'];
  public color4: string[] = ['#27A4C5','#599023','#C35F27'];

  constructor() { 
  }
  ngOnInit(): void {
  }
}
