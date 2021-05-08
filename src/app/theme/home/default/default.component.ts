import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private readonly router: Router,) { }

  ngOnInit(): void {
  }
  details(city:string,countryCode:string) {
    const url = `home/detail/city/${city}/ccode/${countryCode}`
    this.router.navigate([url]);
  }
}
