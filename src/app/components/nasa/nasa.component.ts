import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NasaService } from 'src/app/services/API/NASA/nasa.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  date = new FormControl(new Date());
  fechita: string;
  serializedDate = new FormControl((new Date()).toISOString());
  isInvalid = false;
  maxDate: Date;
  actualDate;
  selectedYear;
  selectedMonth;
  selectedDay;
  currentMonth;
  currentDay;
  currentYear;
  isDisabled = true;
  isNotEmpty = false;
  info: any;
  noInfoAlert = false;

  constructor(private NService: NasaService, public sanitizer: DomSanitizer) {
    this.currentMonth = new Date().getMonth() + 1;
    this.currentDay = new Date().getDate();
    this.currentYear = new Date().getFullYear();
    this.maxDate = new Date(this.currentYear, this.currentMonth, this.currentDay); 
  }

  getInfoData() {
    if (this.selectedDay > this.currentDay && this.selectedMonth == this.currentMonth && this.selectedYear == this.currentYear) {
      this.isInvalid = true;
      this.date.reset();

    } else {
      this.isInvalid = false;
      this.fechita = this.selectedYear + "-" + this.selectedMonth + "-" + this.selectedDay;
      this.date.reset();
      this.NService.getNasaInfo(this.fechita).subscribe((data: any[]) => {
        var tmp = data.toString();
        this.info = JSON.parse(tmp);
        console.log(this.info);
        this.isNotEmpty = true;
      }, errorMessage => {
          console.log("Error al obtener datos");
          this.noInfoAlert = true;
      });
    }
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.isDisabled = false;
    this.actualDate = event;
    this.selectedYear = event.value.getFullYear();
    this.selectedMonth = event.value.getMonth() + 1;
    this.selectedDay = event.value.getDate();
    console.log(" ", this.selectedDay, " ", this.selectedMonth, " ", this.selectedYear);
  }

  ngOnInit(): void {
  }

}
