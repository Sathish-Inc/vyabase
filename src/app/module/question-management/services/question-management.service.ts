import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { map, mapTo, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class QuestionManagementService {
  public qmUrl = `http://localhost:5000/api/question-management`; // your api endpoint

  constructor(private restClient: HttpClient) {}

  public add(data: any): Observable<any | boolean> {
    return this.restClient.post(`${this.qmUrl}`, data).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public editById(data: any, id: any): Observable<any | boolean> {
    return this.restClient.put(`${this.qmUrl}/${id}`, data).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public deleteById(id: any): Observable<any | boolean> {
    return this.restClient.delete(`${this.qmUrl}/${id}`).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public getById(id: any): Observable<any | boolean> {
    return this.restClient.get(`${this.qmUrl}/${id}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public getAll(): Observable<any | boolean> {
    return this.restClient.get(`${this.qmUrl}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  // History Services

  public createQuestionHistory(data: any): Observable<any | boolean> {
    return this.restClient.post(`${this.qmUrl}`, data).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public getAllQuestionHistory(): Observable<any | boolean> {
    return this.restClient.get(`${this.qmUrl}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }
}
