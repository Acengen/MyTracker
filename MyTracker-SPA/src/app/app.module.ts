import { HttpDetailComponent } from './HttpComp/HttpDetail/HttpDetail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpCompComponent } from './HttpComp/HttpComp.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpCompComponent,
    HttpDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
