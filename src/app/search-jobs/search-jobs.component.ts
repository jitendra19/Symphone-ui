import { ApiService } from './../api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.scss']
})
export class SearchJobsComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.ApiService.storejobs(); 
    // .subscribe(
    //   (response)=>{
    //     console.log('data saved');
    //   },
    //   (error) => {
    //     console.log('error!!');
    //   }
    // );
    this.ApiService.getPostedJobs();
    this.ApiService.getinterviewedList();
    this.ApiService.getShortedList();
    this.refresh();
  }

  search() {
    this.refresh();
  }

  refresh() {
    this.ApiService.searchObj = this.searchForm.value;
    this.ApiService.getPostedJobs();
    this.ApiService.getinterviewedList();
    this.ApiService.getShortedList();
  }
}
