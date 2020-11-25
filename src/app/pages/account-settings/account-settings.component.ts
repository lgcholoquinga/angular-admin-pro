import { Component, OnInit } from '@angular/core';

import { SettignsService } from 'src/app/services/settigns.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public links: NodeListOf<Element>;

  constructor(private _settingService: SettignsService) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this._settingService.checkCurrentTheme(this.links);
  }
  
  changeTheme( theme: string){
    this._settingService.changeTheme(theme);
    this._settingService.checkCurrentTheme(this.links);
  }
}
