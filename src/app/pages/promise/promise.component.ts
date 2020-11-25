import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styles: [
  ]
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then( users => console.log(users));
    
  }
  getUsers(){

    const promise = new Promise((resolve,reject) => {
      fetch('https://reqres.in/api/users')
        .then( res => res.json())
        .then( body => resolve(body.data))
    });
    return promise;
  }

}
