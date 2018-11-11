import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './customMaterial.module'; 
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SymphonyUiComponent } from './symphony-ui/symphony-ui.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { ShortedListComponent } from './shorted-list/shorted-list.component';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';

import { ApiService } from './api.service';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SymphonyUiComponent,
    SearchJobsComponent,
    PostedJobsComponent,
    ShortedListComponent,
    InterviewsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
