import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { catchError, map, tap} from 'rxjs/operators';
import {User} from "../classes/user";
import {Faculty} from "../classes/faculty";
import {Curator} from "../classes/curator"
import {Event} from "../classes/event"
import {Role} from "../classes/role"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";
import {FeedbackForm} from "../classes/feedback-form";
import {ElderCurator} from "../classes/elder-curator";
import {Feedback} from "../classes/feedback";


@Injectable()
export class HttpService {

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  baseUrl = 'http://localhost:52311/api/';



  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  createEvent (event: Event): Observable<any> {
    let url = this.baseUrl + 'events/create';
    return this.http.post<any>(url, JSON.stringify(event), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('createEvent', null))
      );
  }

  createFeedback (feedback: Feedback): Observable<Feedback> {
    let url = this.baseUrl + 'feedback/create';
    return this.http.post<any>(url, JSON.stringify(feedback), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('createFeedback', null))
      );
  }

  updateFeedback (feedback: Feedback) {
    let url = this.baseUrl + 'feedback/update';
    return this.http.post<any>(url, JSON.stringify(feedback), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateFeedback', null))
      );
  }

  deleteFeedback (eventId: number, userId: number) {
    let url = this.baseUrl + 'feedback/delete';
    let body = {
      eventId: eventId,
      userId: userId
    };
    return this.http.post<any>(url, JSON.stringify(body), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('deleteFeedback', null))
      );
  }

  getAllFeedbacks(): Observable<Feedback[]> {
    let url = this.baseUrl + 'feedback/all';
    return this.http.get<Feedback[]>(url)
      .pipe(
        catchError(this.handleError<Feedback[]>('getAllFeedbacks', []))
      );
  }

  getFacultyFeedbacks(facultyId: number): Observable<Feedback[]> {
    let url = this.baseUrl + `feedback/faculty?facultyId=${facultyId}`;
    return this.http.get<Feedback[]>(url)
      .pipe(
        catchError(this.handleError<Feedback[]>('getFacultyFeedbacks', []))
      );
  }

  getUserEvents(userId: number): Observable<Event[]> {
    let url = this.baseUrl + `events?userId=${userId}`;

    return this.http.get<Event[]>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Event[]>('getUserEvents', []))
      );
  }

  getUserDeadlines(userId: number): Observable<Event[]> {
    let url = this.baseUrl + `events/deadlines?userId=${userId}`;

    return this.http.get<Event[]>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Event[]>('getUserDeadlines', []))
      );
  }

  updateEvent (event: Event): Observable<any> {
    let url = this.baseUrl + `events/update`;
    return this.http.post<any>(url, JSON.stringify(event), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateEvent',null))
      );
  }

  deleteEvent (id:number): Observable<any> {
    let url = this.baseUrl + `events/delete`;
    return this.http.post<any>(url, JSON.stringify(id), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('deleteEvent',null))
      );
  }

  getFeedbackForms(): Observable<FeedbackForm[]> {
    let url = this.baseUrl + `feedbackforms`;
    return this.http.get<FeedbackForm[]>(url)
      .pipe(
        catchError(this.handleError('getFeedbackForms',[]))
      )
  }

  getRoles (): Observable<Role[]> {
    let url = this.baseUrl + 'roles';
    return this.http.get<Role[]>(url)
      .pipe(
        catchError(this.handleError('getRoles',[]))
      );
  }

  getFaculties(): Observable<Faculty[]> {
    let url = this.baseUrl + 'faculties';
    return this.http.get<Faculty[]>(url)
      .pipe(
        catchError(this.handleError('getFaculties',[]))
      );
  }

  checkLoginOfUser (user: User) : Observable<boolean> {
    let url = this.baseUrl +'users/check';
    console.log(user);
    return this.http.post<boolean>(url,JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<boolean>('checkLoginOfUser',false))
      );
  }

  registerCurator (curator: Curator): Observable<any> {
    let url = this.baseUrl + 'users/register/curator';
    return this.http.post<any>(url, JSON.stringify(curator), this.httpOptions)
      .pipe(
        catchError(this.handleError('registerCurator',null))
      );
  }

  registerElder (elder: ElderCurator): Observable<any> {
    let url = this.baseUrl + 'users/register/elder';
    return this.http.post<any>(url, JSON.stringify(elder), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('registerElder',null))
      );
  }

  logIn(user: User): Observable<User> {
    let url = this.baseUrl + 'users/login';

    return this.http.post<User>(url,JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('logIn',null))
      );
  }

  getCurator(userId: number): Observable<Curator> {
    let url = this.baseUrl + `users/curator?userId=${userId}`;

    // dont have map operator
    return this.http.get<Curator>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Curator>('getCurator',null))
      );

  }

  getElderCurator(userId: number): Observable<ElderCurator> {
    let url = this.baseUrl + `users/elder?userId=${userId}`;

    // dont have map operator
    return this.http.get<ElderCurator>(url)
      .pipe(
        catchError(this.handleError<ElderCurator>('getElderCurator',null))
      );
  }

  getCuratorsFromFaculty(facultyId: number): Observable<Curator[]> {
    let url = this.baseUrl + `users/curators?facultyId=${facultyId}`;
    return this.http.get<Curator[]>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Curator[]>('getCuratorsFromFaculty',[]))
      );
  }

  getEventsForFaculty(facultyId: number): Observable<Event[]> {
    let url = this.baseUrl + `events/forfaculty?facultyId=${facultyId}`;
    return this.http.get<Event[]>(url)
      .pipe(
        catchError(this.handleError<Event[]>('getEventsForFaculty', []))
      )
  }

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
