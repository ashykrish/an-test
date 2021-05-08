import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {HttpInterceptorService} from 'src/app/services/http-interceptor/http-interceptor.service'
import { HeaderComponent } from './theme/static/header/header.component';
import { FooterComponent } from './theme/static/footer/footer.component';
import { LoaderComponent } from './shared/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,   
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
