import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyserviceService {

constructor() { }
    

  confirm(message:string, okCallback:()=>any) {
    alertify.confirm(message, (e:any) => {
      if(e)
        okCallback();
      else {}
    })
  }

  message(message:string) {
    alertify.message(message)
  }

  success(message:string) {
    alertify.success(message)
  }

  warning(message:string) {
    alertify.warning(message)
  }

}
