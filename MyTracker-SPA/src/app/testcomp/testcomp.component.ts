import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
  arr = []
  constructor() { }

  ngOnInit() {
  }

  TypeToAdd(form:NgForm){
    this.arr.push(form.value.name);
    console.log(this.arr)
  }

}
