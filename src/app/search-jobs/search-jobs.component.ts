import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.scss']
})
export class SearchJobsComponent implements OnInit {

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
    this.refresh();
  }

  refresh() {
    setInterval(()=>{
      this.ApiService.getPostedJobs();
    }, 10000)
  }
}
