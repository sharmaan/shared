import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SurveysuccessComponent } from './surveysuccess/surveysuccess.component';

/**
 * SWE-642 group : Anjali Sharma, Rachna Latkar, Bantwal Shreyas Mallya, Govind Sharma
 * Angular default module which holds required declarations, imports and providers used by the application
 */
@NgModule({
  declarations: [
    AppComponent,SurveyComponent, SurveysuccessComponent]
    ,
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutingModule]
    ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
