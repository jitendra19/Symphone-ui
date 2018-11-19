import { ApiService } from './../api.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-shorted-list',
  templateUrl: './shorted-list.component.html',
  styleUrls: ['./shorted-list.component.scss']
})
export class ShortedListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'workat', 'CTC', 'EXP'];
  dataSource;
  constructor(private ApiService: ApiService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.ApiService.postedJobSubject.subscribe(()=>{
      this.dataSource = new MatTableDataSource(this.ApiService.shortedListFromFB);
      this.dataSource.filter = this.ApiService.searchObj && this.ApiService.searchObj.searchText && this.ApiService.searchObj.searchText.trim().toLowerCase();
      this.dataSource.paginator = this.paginator; 
    }); 
  }

}