/**
 * Copyright 2020 Vyasaka Technologies
 */
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";

// import { DataService } from "../data.service";
import { Gallery } from "../gallery.model";

import { ConfirmationModalService } from "../../../lib/components/confirmation/confirmation-modal-service";
import { GalleryService } from "../services/gallery.service";
// import { mapJsonToObject } from "../../../utils/json2object";
// import { MasterMenuData } from "../../master/master-menu.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  // dropdown
  // masterData: MasterMenuData[] = [];
  masterData: any = [{ name: "Public" }, { name: "Customer" }];
  galleryStatus: string[] = ["Yes", "No"];

  // component
  galleryList: Gallery[] = [];
  searchText: string | undefined = undefined;
  galleryGroup: string | undefined = undefined;
  title: string | undefined = undefined;
  publish: string | undefined = undefined;
  displayView: string = "table";
  isCollapsed: boolean = true;
  filterStatus: boolean = false;
  actualList: boolean = true;

  // pagination for grid
  page: number = 1;
  limit = "20";

  // checkbox
  isChecked: boolean = false;
  checkedIdList: any[] = [];
  id: string = "";

  constructor(
    private galleryService: GalleryService,
    private router: Router,
    private modelService: ConfirmationModalService
  ) {}
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.galleryService.getAll(this.limit).subscribe((result: any) => {
      // const data: Gallery[] = mapJsonToObject(result, Gallery);
      const data = result.rows.map((value: any) => {
        return {
          _id: value.doc._id,
          docType: value.doc.docType,
          title: value.doc.title,
          // batchId: ,
          galleryLocation: value.doc.galleryLocation,
          order: value.doc.order,
          description: value.doc.description,
          galleryGroup: value.doc.galleryGroup,
          publish: value.doc.publish,
          createdOn: value.doc.createdOn,
          updatedOn: value.doc.updatedOn,
        };
      });
      this.galleryList = data;
    });

    // this.dataService.getAllMasterData().subscribe((result) => {
    //   const data = mapJsonToObject(result[0].masterMenuData, MasterMenuData);

    //   this.masterData = data.filter(
    //     (item: any) => item.application === "Gallery Master"
    //   );
    // });
  }

  applyFilter() {
    this.actualList = false;
    this.filterStatus = true;
  }

  reset() {
    this.actualList = true;
    this.filterStatus = false;
  }

  getSelectedId(isChecked: boolean, id: string) {
    this.id = id;
    if (isChecked === true) {
      this.checkedIdList.push(this.id);
    } else {
      const index = this.checkedIdList.indexOf(this.id);
      this.checkedIdList.splice(index);
    }
  }

  openDeleteConfirmationDialog(id: string) {
    const modal = this.modelService.createConfirmationModal();
    modal.content.showConfirmationModal(
      "Delete confirmation",
      "Are you sure want to delete " + name + "?"
    );

    modal.content.onClose.subscribe((result: boolean) => {
      if (result === true) {
        // when pressed Yes
        // this.dataService.delete(id).subscribe(() => {});
        this.galleryService.deleteGalleryById(id).subscribe(console.log);
        this.getAll();
      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }

  editGallery(id: string) {
    this.router.navigate(["/gallery/edit"], { queryParams: { id } });
  }

  viewGallery(id: string) {
    this.router.navigate(["/gallery/view"], { queryParams: { id } });
  }

  refreshPage() {
    this.getAll();
  }
}
