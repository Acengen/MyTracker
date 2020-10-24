import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  value:any;

  constructor(private http: HttpClient) { }

  getValues() {
    return  this.http.get("http://localhost:5000/WeatherForecast")
  }

   
}
