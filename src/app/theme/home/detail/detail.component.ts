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
  data = {
    list:[{
      "dt": 1620486000,
      "main": {
        "temp": 287.86,
        "feels_like": 287.55,
        "temp_min": 287.86,
        "temp_max": 290.3,
        "pressure": 1004,
        "sea_level": 1004,
        "grnd_level": 999,
        "humidity": 83,
        "temp_kf": -2.44
      },
      "dt_txt": "2021-05-08 15:00:00"
    },
    {
    "dt": 1620486000,
    "main": {
      "temp": 287.86,
      "feels_like": 287.55,
      "temp_min": 287.86,
      "temp_max": 290.3,
      "pressure": 1004,
      "sea_level": 1004,
      "grnd_level": 999,
      "humidity": 83,
      "temp_kf": -2.44
    },
    "dt_txt": "2021-05-08 15:00:00"
  }
]
  };
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
    const url = `forecast?q=${this.city},${this.countryCode},&appid=${environment.appId}`;  
    this.httpService.doGet(url).subscribe((result: any) => {
     this.data = result;
    },
    (error: any) => { 
    }
    );
  }

}
