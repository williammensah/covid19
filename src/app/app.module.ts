import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import {CountUpModule} from 'ngx-countup';
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  global:boolean;
  country:string;
  dailyData: any[];
  countries:any[];
}
