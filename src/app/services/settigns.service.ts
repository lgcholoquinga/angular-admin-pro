import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettignsService {

  public linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href',url);
  }

  changeTheme( theme: string){
    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href',urlTheme);
    localStorage.setItem('theme',urlTheme);
  }

  checkCurrentTheme(links: NodeListOf<Element>){
    links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnUrlTheme = `./assets/css/colors/${btnTheme}.css`;
      const currenTheme = this.linkTheme.getAttribute('href');
      if(btnUrlTheme === currenTheme){
        elem.classList.add('working');
      }
    });
  }
}
