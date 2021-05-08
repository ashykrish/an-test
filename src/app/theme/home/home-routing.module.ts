import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import {DetailComponent} from './detail/detail.component'
const routes: Routes = [
  {
    path: '', 
    component: DefaultComponent
  },
  {
    path: 'detail/city/:city/ccode/:ccode', 
    component: DetailComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
