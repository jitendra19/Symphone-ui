import { ApiService } from './../api.service';

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-interviews-list',
  templateUrl: './interviews-list.component.html',
  styleUrls: ['./interviews-list.component.scss']
})
export class InterviewsListComponent implements OnInit {

  displayedColumns: string[] = ['interview', 'interviewer', 'Date',  'RESULT'];
  dataSource;
  constructor(private ApiService: ApiService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.ApiService.postedJobSubject.subscribe(()=>{
      this.dataSource = new MatTableDataSource(this.ApiService.interviewedListFromFB);
      this.dataSource.paginator = this.paginator; 
      this.dataSource.filter = this.ApiService.searchObj && this.ApiService.searchObj.searchText && this.ApiService.searchObj.searchText.trim().toLowerCase();
    });     
  }

}
