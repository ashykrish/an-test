import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DefaultComponent } from './default/default.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
