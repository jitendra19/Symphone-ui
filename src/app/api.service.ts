import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class ApiService {
    postedJobsfromFB: any = [];
    interviewedListFromFB: any = [];
    shortedListFromFB: any = [];
    constructor(private http: Http) {}
    postedJobSubject = new Subject();

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
                this.postedJobsfromFB =     []
                for (let a in data) {                       
                    this.postedJobsfromFB.push(data[a]);
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