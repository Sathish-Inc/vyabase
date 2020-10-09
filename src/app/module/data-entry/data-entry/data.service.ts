import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { HttpClient } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private restClient: HttpClient) {}

  public url = `http://localhost:5000/api/website/master`;

  add(data: any): Observable<any> {
    return this.restClient
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

}
