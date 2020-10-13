import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { HttpClient } from "@angular/common/http";

import { map, mapTo, catchError } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public url = `http://localhost:3000/dataEntry`;

  public add(data: any): Observable<any> {
    return this.http
    .post(`${this.url}`,data)
    .pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  public get(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public edit(data: any, id: any): Observable<any | boolean> {
    return this.http.put(`${this.url}/${id}`,data).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }
  public getById(id: any): Observable<any | boolean> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }
}
