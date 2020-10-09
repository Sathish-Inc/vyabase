/**
 * Copyright 2020 Vyasaka Technologies
 */

import { Injectable } from "@angular/core";

// import { Observable } from "rxjs/Observable";

// import { DbService } from "../../services/db.service";

// import { MasterConstant } from "../master/master.constant";
// import { GalleryConstant } from "./gallery-constant";
// import { Gallery } from "./gallery.model";

@Injectable()
export class DataService {
  // constructor(private dbService: DbService) {}

//   getAll(): Observable<any> {
//     return new Observable(observer => {
//       this.dbService
//         .getAll(GalleryConstant.KEY_DOC_TYPE, GalleryConstant.DOC_TYPE)
//         .subscribe(
//           (result: any) => {
//             observer.next(result);
//           },
//           (error: any) => {
//             console.error("Error in getting all document:", error);
//             observer.next(error);
//           }
//         );
//     });
//   }

//   getAllMasterData(): Observable<any> {
//     return new Observable(observer => {
//       this.dbService
//         .getAll(MasterConstant.KEY_DOC_TYPE, MasterConstant.DOC_TYPE)
//         .subscribe(
//           (result: any) => {
//             observer.next(result);
//           },
//           (error: any) => {
//             console.error("Error in getting all document:", error);
//             observer.next(error);
//           }
//         );
//     });
//   }

  // get(_id: string): Observable<any> {
  //   return new Observable(observer => {
  //     this.dbService.get(_id).subscribe(
  //       (result: any) => {
  //         observer.next(result);
  //       },
  //       (error: any) => {
  //         console.error("Error in getting document:", error);
  //         observer.next(error);
  //       }
  //     );
  //   });
  // }

//   create(gallery: Gallery): Observable<any> {
//     const data = JSON.parse(JSON.stringify(gallery));
//     return new Observable(observer => {
//       this.dbService.create(data).subscribe(
//         (result: any) => {
//           observer.next(result);
//         },
//         (error: any) => {
//           console.error("Error in creating document:", error);
//           observer.next(error);
//         }
//       );
//     });
//   }

//   update(_id: string, gallery: Gallery): Observable<any> {
//     const data = JSON.parse(JSON.stringify(gallery));
//     return new Observable(observer => {
//       this.dbService.update(data).subscribe(
//         (result: any) => {
//           observer.next(result);
//         },
//         (error: any) => {
//           console.error("Error in updating document:", error);
//           observer.next(error);
//         }
//       );
//     });
//   }

//   delete(_id: string): Observable<any> {
//     return new Observable(observer => {
//       this.dbService.remove(_id).subscribe(
//         (result: any) => {
//           observer.next(result);
//         },
//         (error: any) => {
//           console.error("Error in deleting document:", error);
//           observer.next(error);
//         }
//       );
//     });
//   }
}
