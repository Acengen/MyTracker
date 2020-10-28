import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-valuesOfuser',
  templateUrl: './valuesOfuser.component.html',
  styleUrls: ['./valuesOfuser.component.css']
})
export class ValuesOfuserComponent implements OnInit {
  value = [];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get("http://localhost:5000/WeatherForecast").subscribe(
      (resdata) => {
        for(let key in resdata) {
          this.value.push(resdata[key])
        }
      }
    )
  }

}
