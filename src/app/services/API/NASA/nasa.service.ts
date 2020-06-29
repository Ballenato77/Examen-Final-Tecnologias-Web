import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private link: string = "http://localhost:3000/nasa/";

  constructor(private httpClient: HttpClient) { }

  getNasaInfo(date: string) {

    var url = this.link + date;
    return this.httpClient.get(url);

    
  }
}
