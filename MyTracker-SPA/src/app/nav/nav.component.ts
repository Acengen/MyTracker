import { Router } from '@angular/router';
import { AlertifyserviceService } from './../Alertifyservice.service';
import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  isActive:boolean = false;
  errorMsg = "";
  constructor(private service: MyserviceService,private alertify: AlertifyserviceService,private router:Router) { }

  ngOnInit() {
  }

  login(form:NgForm) {
    this.service.login(form.value).subscribe(
      resdata =>  this.alertify.success("Success"),
      error => {
       if(error.error.title === "Unauthorized") {
         this.alertify.warning("Unauthorized")
       }
        this.alertify.warning(error.error.errors.Password[0])
        this.alertify.warning(error.error.errors.Username[0])

        
      }
    )
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message("Logout");
    this.router.navigate(['/home'])
  }

  dropdownToggle() {
    this.isActive = !this.isActive
  }
}
