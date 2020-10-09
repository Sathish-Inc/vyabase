import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { VyaRestClientService } from "vya-restclient";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MyPaginationService {
  constructor(private restClient: HttpClient) {}

  public paginate(
    url: string,
    limit?: string,
    startkey?: string,
    endkey?: string
  ): Observable<any> {
    let httpGetRequestCall: any;
    if (limit && !startkey && !endkey) {
      httpGetRequestCall = this.restClient.get(`${url}?limit=${limit}`);
    } else if (limit && startkey && !endkey) {
      httpGetRequestCall = this.restClient.get(
        `${url}?limit=${limit}&startkey=${startkey}`
      );
    } else if (limit && startkey && endkey) {
      httpGetRequestCall = this.restClient.get(
        `${url}?limit=${limit}&startkey=${startkey}&endkey=${endkey}`
      );
    } else {
      httpGetRequestCall = this.restClient.get(`${url}`);
    }
    return httpGetRequestCall;
  }
}
