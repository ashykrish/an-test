import {Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {HttpService} from 'src/app/services/http-service/http.service';
import {APIEndpoint} from 'src/app/shared/static-data/static-data';
import {environment} from 'src/environments/environment';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  city:string;
  countryCode:string;
  constructor(  
    private readonly activatedRoute:ActivatedRoute, 
    private readonly httpService: HttpService) {
      this.city = this.activatedRoute.snapshot.params.city;
      this.countryCode = this.activatedRoute.snapshot.params.ccode;
  }
  ngOnInit(): void {
    this.getCityDetails( this.city,this.countryCode );
  }
  getCityDetails(city:string,countryCode:string): void{
    const url = `${this.city},${this.countryCode},&appid=${environment.appId}`;
    console.log("url",url);
    this.httpService.doGet(url).subscribe((result: any) => {
      console.log("result",result);

    },
    (error: any) => { 
    }
    );
  }

}
