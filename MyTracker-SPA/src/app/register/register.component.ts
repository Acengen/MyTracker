import { AlertifyserviceService } from './../Alertifyservice.service';
import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private service: MyserviceService,private http:HttpClient,private alertify:AlertifyserviceService) { }

  ngOnInit() {
   
  }
  register(form:NgForm) {
    this.service.register(form.value).subscribe(
      response => this.alertify.success("Registered successfuly"),
      error => this.alertify.warning(error.errors)
    )
  }

  
}
