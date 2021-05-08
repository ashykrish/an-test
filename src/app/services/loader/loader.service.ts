import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  isLoading = new Subject<boolean>();
  isSessionExpires = new Subject<boolean>();
  printCheck = false;
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }

  sessionExpiresShow() {
    this.isSessionExpires.next(true);
  }
  sessionExpiresHide() {
    this.isLoading.next(false);
    this.isSessionExpires.next(false);
  }

}
