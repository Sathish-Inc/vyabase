/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
// import { DbService } from "../../../services/db.service";

// import { VyaRestClientService } from "vya-restclient";
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MasterService {
  public masterUrl = `http://localhost:5000/api/website/master`;
  constructor( private restClient: HttpClient){}

  // constructor(
  //   private dbService: DbService,
  //   private restClient: HttpClient
  // ) {
  //   this.dbService.syncFrom("all-master");
  // }

  getById(id: any, pid: any): Observable<any> {
    return this.restClient.get(`${this.masterUrl}?id=${id}&pid=${pid}`).pipe(
      map((value: any) => {
        return value.doc.docs[0];
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  appendField(id: any, pid: any, data: any) {
    return this.restClient
      .post(`${this.masterUrl}?id=${id}&pid=${pid}`, data)
      .pipe(
        map((value: any) => {
          return value;
        }),
        catchError((error) => {
          return error;
        })
      );
  }

  update(id: any, pid: any, data: any) {
    return this.restClient
      .put(`${this.masterUrl}?id=${id}&pid=${pid}`, data)
      .pipe(
        map((value: any) => {
          return value;
        }),
        catchError((error) => {
          return error;
        })
      );
  }

  delete(_id: string): Observable<any> {
    return this.restClient.delete(`${this.masterUrl}/${_id}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error) => {
        return error;
      })
    );
  }
}
