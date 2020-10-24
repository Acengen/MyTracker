import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-HttpDetail',
  templateUrl: './HttpDetail.component.html',
  styleUrls: ['./HttpDetail.component.scss']
})
export class HttpDetailComponent implements OnInit {

  @Input() singleValue:any
  constructor() { }

  ngOnInit() {
  }

}
