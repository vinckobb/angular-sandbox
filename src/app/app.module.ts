import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EchartComponent } from './echart/echart.component';
import { EchartSimpleComponent } from './echart-simple/echart-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    EchartComponent,
    EchartSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
