/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Injectable } from "@angular/core";

// import { Observable } from "rxjs/Observable";
// import { DbService } from "./services/master.service";

// import { MasterMenu } from "./master-menu.model";
// import { MasterConstant } from "./master.constant";
// import { HttpClient } from "@angular/common/http";

@Injectable()
  export class DataService {
  // constructor(private dbService: DbService) {
  //   this.dbService.syncFrom("all-master");
  // }

  // constructor(private dbService: HttpClient) {}

  // getAll(): Observable<any> {
  //   return new Observable(observer => {
  //     this.dbService
  //       .getAll(MasterConstant.KEY_DOC_TYPE, MasterConstant.DOC_TYPE)
  //       .subscribe(
  //         (result: any) => {
  //           observer.next(result);
  //         },
  //         (error: any) => {
  //           console.error("Error in getting all document:", error);
  //           observer.next(error);
  //         }
  //       );
  //   });
  // }

  // appendField(data: MasterMenu) {
  //   return new Observable(observer => {
  //     this.dbService.isDocExist(MasterConstant.DOC_TYPE).subscribe(result => {
  //       if (result) {
  //         const appendData = data.masterMenuData[0];
  //         this.dbService
  //           .appendField(MasterConstant.DOC_TYPE, "masterMenuData", appendData)
  //           .subscribe(
  //             result1 => {
  //               observer.next(result1);
  //             },
  //             error1 => {
  //               observer.next(error1);
  //             }
  //           );
  //       } else {
  //         this.dbService.create(data).subscribe(
  //           result2 => {
  //             observer.next(result2);
  //           },
  //           error2 => {
  //             observer.next(error2);
  //           }
  //         );
  //       }
  //     });
  //   });
  // }

  // update(data: MasterMenu) {
  //   return new Observable(observer => {
  //     this.dbService.remove(MasterConstant.DOC_TYPE).subscribe(() => {
  //       this.dbService.create(data).subscribe(
  //         result2 => {
  //           observer.next(result2);
  //         },
  //         error2 => {
  //           observer.next(error2);
  //         }
  //       );
  //     });
  //   });
  // }

  // delete(_id: string): Observable<any> {
  //   return new Observable(observer => {
  //     this.dbService.remove(_id).subscribe(
  //       (result: any) => {
  //         observer.next(result);
  //       },
  //       (error: any) => {
  //         console.error("Error in deleting document:", error);
  //         observer.next(error);
  //       }
  //     );
  //   });
  // }
}
