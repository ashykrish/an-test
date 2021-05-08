import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import {  of as observableOf } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { catchError, filter, map, shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(
		private readonly http: HttpClient		
		) {
	}
	doGet(endpoint) {
		const url = `${environment.apiBase}${endpoint}`;		
		return this.http.get(url, { withCredentials: true }).pipe(
			map((response: Response) => response),
			shareReplay(),
			catchError((e) => {
				return observableOf(e);
			}),
			filter((e) => !!e)
		);


  }
  doGet1(endpoint) {
		const url = `https://reqres.in/api/users?page=2`;		
		return this.http.get(url, { }).pipe(
			map((response: Response) => response),
			shareReplay(),
			catchError((e) => {
				return observableOf(e);
			}),
			filter((e) => !!e)
		);


	}
	doPost(endpoint, payload) {
		const url = `${environment.apiBase}/${endpoint}`;		
		return this.http.post(url, payload, { }).pipe(
			map(
				(response: any) => response),
			shareReplay(),
			catchError((e) => {
				return observableOf(e);
			}),
			filter((e) => !!e)
		);


	}

	doPut(endpoint, payload) {
		let headers = new HttpHeaders();
		headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
		const url = `${environment.apiBase}/${endpoint}`;
		return this.http.put(url, { headers }).pipe(
			map((response: Response) => response),
			shareReplay(),
			catchError((e) => {
				return observableOf(e);
			}),
			filter((e) => !!e)
		);
	}

}
