import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-HttpComp',
  templateUrl: './HttpComp.component.html',
  styleUrls: ['./HttpComp.component.scss']
})
export class HttpCompComponent implements OnInit {

  values = [];
  single:any;
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
       this.service.getValues().subscribe(
         (resdata) => {
           for(let key in resdata) {
                this.values.push(resdata[key])
           }
         }
       )
  }

  getValueByIndex(item){
     this.single = item;
  }
}
