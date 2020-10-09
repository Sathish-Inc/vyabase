/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { JsonReaderService } from "../services/json-reader.service";
// import { mapJsonToObject } from "../../../utils/json2object";
// import { DataService } from "../data.service";
import { MasterMenuDocType } from "../master-menu-doctype.model";
// import { MasterMenuData } from "../master-menu.model";
import { MasterService } from "../services/master.service";

@Component({
  selector: "app-master-list",
  templateUrl: "./master-list.component.html",
  styleUrls: ["./master-list.component.scss"],
})
export class MasterListComponent implements OnInit {
  projectData: MasterMenuDocType[] = [];

  constructor(
    private router: Router,
    // private dataService: DataService,
    private masterService: MasterService,
    private  JsonReaderService:  JsonReaderService
  ) {}

  ngOnInit() {
    this.JsonReaderService.getMasterMenuDocType().subscribe((response: any) => {
      console.log(response);
      this.projectData = response;
      this.getAllMasterMenuDetails();
    });
  }

  masterNavigation(_id: string) {
    const id = _id.split("::")[1];
    const pid = _id.split("::")[0].toLowerCase();
    this.router.navigate(["/master/master-menu"], {
      queryParams: { id, pid },
    });
  }

  getAllMasterMenuDetails() {
    for (const doctype of this.projectData) {
      let masterMenuData: any = [];
      console.log(doctype);
      // @ts-ignore
      const id = doctype.id.split("::")[1];
      // @ts-ignore
      const pid = doctype.id.split("::")[0];
      this.masterService.getById(id, pid).subscribe((result) => {
        if (result) {
          masterMenuData = result.masterMenu;
        }
      });
      if (masterMenuData.length > 0) {
        // const data = mapJsonToObject(
        //   result[0]["masterMenuData"],
        //   MasterMenuData
        // );
        const data = masterMenuData;
        const filteredData = data.filter(
          (item: any) => item.application === doctype.title
        );
        doctype.length = filteredData.length;
      } else {
        doctype.length = 0;
      }
    }
  }
}
