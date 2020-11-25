import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    {
        path:'dashboard',
        component:PagesComponent,
        children: [
          {path:'', component:DashboardComponent, data: [{namePage: 'Dashboard'}]},
          {path:'grafica1',component:Grafica1Component, data: [{namePage: 'Grafica 1'}]},
          {path:'progress',component:ProgressComponent, data: [{namePage: 'PorgressBar'}]},
          {path: 'account-settings', component: AccountSettingsComponent, data: [{namePage: 'Account-Settings'}]},
          {path: 'promise', component: PromiseComponent, data: [{namePage: 'Promises'}]},
          {path: 'rxjs', component: RxjsComponent, data: [{namePage: 'Rxjs'}]}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
