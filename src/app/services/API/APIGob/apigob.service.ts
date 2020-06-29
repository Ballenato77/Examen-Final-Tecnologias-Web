import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApigobService {

  constructor(private httpClient: HttpClient) {}

  getWeatherData() {
    return this.httpClient.get('http://localhost:3000/api');
  }
}
