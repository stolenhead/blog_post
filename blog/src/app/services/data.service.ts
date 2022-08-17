import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  petitionUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  url:string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(
    private $http: HttpClient 
  ) { }

  getData(): Observable<any>{
   

    return this.$http.get(this.petitionUrl )
    .pipe(retry(1), catchError(this.handleError)) ;
  }

  getComments(): Observable<any>{
    return this.$http.get( this.url )
    .pipe(retry(1), catchError(this.handleError)) ;
  }

  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
