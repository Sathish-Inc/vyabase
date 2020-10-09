import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public url = "assets/table/data.json";

  constructor(private http: HttpClient) { }


  public getData(): Observable<any | boolean>{
    return this.http.get(`${this.url}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }
}
