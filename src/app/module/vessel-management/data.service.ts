/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { HttpClient } from "@angular/common/http";
import { map, mapTo, catchError } from "rxjs/operators";

@Injectable()
export class DataService {
  public vesselUrl = `http://localhost:5000/api/vessel`;

  constructor(private restClient: HttpClient) {}

  public add(data: any): Observable<any | boolean> {
    return this.restClient.post(`${this.vesselUrl}`, data).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public editById(data: any, id: any): Observable<any | boolean> {
    return this.restClient.put(`${this.vesselUrl}/${id}`, data).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public deleteById(id: any): Observable<any | boolean> {
    return this.restClient.delete(`${this.vesselUrl}/${id}`).pipe(
      mapTo(true),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public getById(id: any): Observable<any | boolean> {
    return this.restClient.get(`${this.vesselUrl}/${id}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  public getAll(): Observable<any | boolean> {
    return this.restClient.get(`${this.vesselUrl}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }
}
