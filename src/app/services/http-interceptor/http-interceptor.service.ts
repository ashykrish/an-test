import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { LoaderService } from '../loader/loader.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    totalRequests = 0;
  constructor(
    private readonly loaderService: LoaderService
  ) {
  }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    this.totalRequests++;  
    this.decreaseRequests();
    return next.handle(httpRequest).pipe(retry(1));    
  }
  decreaseRequests() {
    if (this.totalRequests > 0) {
      this.totalRequests--;
    }
    if (this.totalRequests === 0) {
      this.loaderService.hide();
    }
  }
}

