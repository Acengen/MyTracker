import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  value:any;
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  getValues() {
    return  this.http.get("http://localhost:5000/WeatherForecast")
  }

  login(value) {
    return this.http.post(this.baseUrl + 'login', value)
      .pipe(map((resdata:any) => localStorage.setItem("token", resdata.token)))
  }
   
  register(value) {
    return this.http.post(this.baseUrl + "register", value);
  }
}
