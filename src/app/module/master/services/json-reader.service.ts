import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {

  constructor(private http:HttpClient) { }

  getMasterMenuDocType():Observable<any>{
    return this.http.get('./assets/data/website-master-doctype.json');
  }
  getWebsiteMasterDefaultData() :Observable<any>{
    return this.http.get<any>( "./assets/data/website-master-default-master.json")
  }

}
