import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class ApiService {
    postedJobsfromFB: any = [];
    constructor(private http: Http) {}
    postedJobSubject = new Subject();

    storejobs() {        
        // postedJobsdata.forEach((a)=>{
        //     this.http.post('https://symphoney-api.firebaseio.com/postedJobs.json', a)
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
}