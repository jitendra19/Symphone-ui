import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class ApiService {
    searchText: string = ''
    postedJobsfromFB: any = [];
    interviewedListFromFB: any = [];
    shortedListFromFB: any = [];
    constructor(private http: Http) {}
    postedJobSubject = new Subject();
    searchSubject = new Subject();
    searchObj = {
        isOpen: false,
        isclosed: false,
        searchText: ''
      };

    storejobs() {        
        // postedJobsdata.forEach((a)=>{
        //     this.http.post('https://symphoney-api.firebaseio.com/interviewed.json', a)
        //     .subscribe(()=>{
        //         console.log('data saved');
        //     });   
        // })        
    }

    getPostedJobs() {
        this.http.get('https://symphoney-api.firebaseio.com/postedJobs.json')
        .subscribe(
            (response: Response) => {
                const data = <any>response.json();    
                this.postedJobsfromFB = [];       
                    for (let a in data) {
                        if(this.searchObj.isclosed !== this.searchObj.isOpen) {
                            if(this.searchObj.isclosed && data[a].status === 'closed')
                            this.postedJobsfromFB.push(data[a]);
                            if(this.searchObj.isOpen && data[a].status === 'open')
                            this.postedJobsfromFB.push(data[a]);
                        }else {
                            this.postedJobsfromFB.push(data[a]);
                        }
                    }                    
                    this.postedJobSubject.next();
            }
        );
    }

    getinterviewedList() {
        this.http.get('https://symphoney-api.firebaseio.com/interviewed.json')
        .subscribe(
            (response: Response) => {
                const data = <any>response.json();    
                this.interviewedListFromFB = [];
                for (let a in data) {                       
                    this.interviewedListFromFB.push(data[a]);
                }
                this.postedJobSubject.next();
            }
        );
    }

    getShortedList() {
        this.http.get('https://symphoney-api.firebaseio.com/shortlisted.json')
        .subscribe(
            (response: Response) => {
                const data = <any>response.json();    
                this.shortedListFromFB = [];
                for (let a in data) {                       
                    this.shortedListFromFB.push(data[a]);
                }
                this.postedJobSubject.next();
            }
        );
    }
}