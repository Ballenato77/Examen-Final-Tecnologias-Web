import { Component, OnInit, Input } from '@angular/core';
import { ApigobService } from 'src/app/services/API/APIGob/apigob.service';

@Component({
  selector: 'app-gobierno',
  templateUrl: './gobierno.component.html',
  styleUrls: ['./gobierno.component.css']
})
export class GobiernoComponent implements OnInit {
  data: any;
  results: any;
  constructor(private gob: ApigobService) {

  }
  ngOnInit(): void {
    this.gob.getWeatherData().subscribe((res: any) => {
      this.setData(res);
    });
  }
  setData(res: any) {
    this.data = res;
    this.results = this.data.results;
  }
}
