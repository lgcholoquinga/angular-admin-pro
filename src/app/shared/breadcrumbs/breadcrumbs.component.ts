import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy  {

  public namePage: string;
  public namePageSubs: Subscription;

  constructor(private router:Router) {
   this.namePageSubs =  this.getNamePage()
                        .subscribe( ({namePage}) => {
                          this.namePage = namePage;   
                          document.title = `AdminPro - ${namePage}`;     
                        });
  }

  getNamePage(){
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event:ActivationEnd) => event.snapshot.data[0] ),
      );
  }
  ngOnDestroy(){
    this.namePageSubs.unsubscribe();
  }
}
