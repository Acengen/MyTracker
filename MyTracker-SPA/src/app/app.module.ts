import { approute } from './routes';
import { ValuesOfuserComponent } from './register/valuesOfuser/valuesOfuser.component';
import { HttpDetailComponent } from './HttpComp/HttpDetail/HttpDetail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpCompComponent } from './HttpComp/HttpComp.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [				
    AppComponent,
    HttpCompComponent,
    HttpDetailComponent,
      NavComponent,
      RegisterComponent,
      ValuesOfuserComponent,
      TestcompComponent,
      ListComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
