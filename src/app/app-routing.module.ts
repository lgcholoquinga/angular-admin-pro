import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modules
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes:Routes = [
  //All routes refrent to Pages Moduel is in PagesRoutingModule
  //All routes referent to Auth Module is in AuthRoutingMoudle
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'**',component: NopagefoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
