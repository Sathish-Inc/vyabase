import { Injectable } from "@angular/core";
// import { VyaRestClientService } from "vya-restclient";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, mapTo, map } from "rxjs/operators";
import { MyPaginationService } from "../../../lib/pagination/pagination.service";

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  constructor(
    private restClient: HttpClient,
    private paginationService: MyPaginationService
  ) {}

  public galleryUrl: string = `http://localhost:5000/api/website/gallery`;

  getGalleryById(id: any): Observable<any> {
    return this.restClient.get(`${this.galleryUrl}/${id}`).pipe(
      map((value: any) => {
        return value.doc.docs[0];
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  getAll(limit: string, startkey?: string, endkey?: string): Observable<any> {
    return this.paginationService
      .paginate(`${this.galleryUrl}`, limit, startkey, endkey)
      .pipe(
        map((value: any) => {
          if (value) {
            return value.response;
          }
        }),
        catchError((error) => {
          return error;
        })
      );
  }

  deleteGalleryById(id: any): Observable<any | boolean> {
    return this.restClient.delete(`${this.galleryUrl}/${id}`).pipe(
      mapTo(true),
      catchError((error) => {
        return error;
      })
    );
  }

  editGalleryById(data: any, id: any): Observable<any | boolean> {
    return this.restClient.put(`${this.galleryUrl}/${id}`, data).pipe(
      mapTo(true),
      catchError((error) => {
        return error;
      })
    );
  }

  addGallery(data: any): Observable<any | boolean> {
    return this.restClient.post(`${this.galleryUrl}`, data).pipe(
      mapTo(true),
      catchError((error) => {
        return error;
      })
    );
  }
  get(id: any): Observable<any | boolean> {
    return this.restClient.get(`${this.galleryUrl}/${id}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  // class END
}
