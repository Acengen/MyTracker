import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-HttpComp',
  templateUrl: './HttpComp.component.html',
  styleUrls: ['./HttpComp.component.scss']
})
export class HttpCompComponent implements OnInit {

  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("http://localhost:5000/WeatherForecast").subscribe(
      resdatta => {
          this.values = resdatta;
          console.log(this.values)
      }
    )
  }

}
