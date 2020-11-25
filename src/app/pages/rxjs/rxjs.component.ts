import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs:Subscription;
  constructor() {
    /*this.returnObservable().pipe(
      retry(1)
    ).subscribe(
      value => console.log('susb:',value),
      err => console.warn(err),
      () => console.info("Obs Finished")
    );*/
    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }

  ngOnInit(): void {}

  returnInterval(): Observable<number> {
    return interval(100).pipe(
      take(10),
      map((value) => value + 1),
      filter(value => (value % 2 === 0) ? true : false),
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('variable i is 2');
        }
      }, 1000);
    });
  }


  ngOnDestroy(){
    this.intervalSubs.unsubscribe();
  }
}
