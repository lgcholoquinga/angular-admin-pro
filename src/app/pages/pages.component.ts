import { Component, OnInit } from '@angular/core';

import { SettignsService } from '../services/settigns.service';
//function that init plugins of index.html file main
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private _settingService: SettignsService) { 
  }

  ngOnInit(): void {
    customInitFunctions();
  }
}
