import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent  {

  //@Input('value') public progress:number = 20;
  @Input() public progress:number = 20;
  @Input() public btnClass:string = "btn btn-primary";

  @Output() SalidaValue: EventEmitter<number> = new EventEmitter();

  changeValue( value:number ){
    if(this.progress >=100 && this.progress >=0 ){
      this.SalidaValue.emit(100);
      return this.progress = 100;
    }

    if(this.progress <= 0 && this.progress < 0 ){
      this.SalidaValue.emit(0);
      return this.progress = 0;
    }
    this.progress = this.progress + value;
    this.SalidaValue.emit(this.progress);
  }

  OnChangeInput( value:number ){
    if(value >=100){
      this.progress = 100;
    }else if(value <= 0){
      this.progress = 0;
    }else{
      this.progress = value;
    }
    this.SalidaValue.emit(this.progress);
  }
}
