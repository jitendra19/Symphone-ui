import { ApiService } from './../api.service';

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.scss']
})
export class PostedJobsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['company', 'title', 'date', 'status'];
  dataSource;

  constructor(private ApiService: ApiService) { }
    
  ngOnInit() {
    this.ApiService.postedJobSubject.subscribe(()=>{      
      this.dataSource = new MatTableDataSource(this.ApiService.postedJobsfromFB);    
      this.dataSource.paginator = this.paginator; 
      this.dataSource.filter = this.ApiService.searchObj && this.ApiService.searchObj.searchText && this.ApiService.searchObj.searchText.trim().toLowerCase();
      });  
    this.ApiService.searchSubject.subscribe(()=>{
      // TODO      
    });  
  }
}
