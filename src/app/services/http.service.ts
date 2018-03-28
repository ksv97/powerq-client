import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { catchError, map, tap} from 'rxjs/operators';
import {User} from "../classes/user";
import {Curator} from "../classes/curator"
import {Role} from "../classes/role"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";


@Injectable()
export class HttpService {

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  baseUrl = 'http://localhost:52311/api/';



  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  // createEvent (event: ScheduleEvent) {
  //   let url = this.baseUrl + 'events/create';
  //   return this.http.post(url, JSON.stringify(event), this.requestOpts);
  // }

  // getEvents(userId: number) {
  //   let url = this.baseUrl + `events?userId=${userId}`;
  //   let opts = new RequestOptions();
  //   opts.headers = this.requestOpts.headers;
  //   return this.http.get(url, opts).map(result => result.json());
  // }

  // updateEvent (event: ScheduleEvent) {
  //   let url = this.baseUrl + `events/update`;
  //   return this.http.post(url, JSON.stringify(event), this.requestOpts);
  // }

  // deleteEvent (id:number) {
  //   let url = this.baseUrl + `events/delete`;
  //   return this.http.post(url, JSON.stringify(id), this.requestOpts);
  // }

  getDeadlines (userId:number) {
    let url = this.baseUrl + `events/deadlines?userId=${userId}`;
    return this.http.get(url);
  }

  getRoles (): Observable<Role[]> {
    let url = this.baseUrl + 'roles';
    return this.http.get<Role[]>(url)
      .pipe(
        catchError(this.handleError('getRoles',[]))
      );
  }

  getFaculties() {
    let url = this.baseUrl + 'faculties';
    return this.http.get(url);
  }

  checkLoginOfUser (user: User) : Observable<boolean> {
    let url = this.baseUrl +'users/check';
    console.log(user);
    return this.http.post<boolean>(url,JSON.stringify(user), this.httpOptions);
  }

  // registerCurator (curator: Curator) {
  //   let url = this.baseUrl + 'users/register/curator';
  //   return this.http.post(url, JSON.stringify(curator), this.requestOpts);
  // }

  // registerElder (elder: ElderCurator) {
  //   let url = this.baseUrl + 'users/register/elder';
  //   return this.http.post(url, JSON.stringify(elder), this.requestOpts);
  // }

  // logIn(user: User) {
  //   let url = this.baseUrl + 'users/login';
  //
  //   return this.http.post(url,JSON.stringify(user), this.requestOpts).map(result => result.json());
  // }

  // getCurator(userId: number) {
  //   let url = this.baseUrl + `users/curator?userId=${userId}`;
  //
  //   let opts = new RequestOptions();
  //   opts.headers = this.requestOpts.headers;
  //   //opts.params.append('userId', userId.toString());
  //
  //   // dont have map operator
  //   return this.http.get(url, opts).map(result => result.json());
  //
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
