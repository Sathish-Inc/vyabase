/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ConfirmationModalService } from "../../../lib/components/confirmation/confirmation-modal-service";
import { DataService } from "../data.service";
import { VesselManagement } from "../vessel-management.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  // component
  displayView: string = "table";
  submitted: boolean = false;
  vesselManagementData: VesselManagement[] = [];
  settingsData: any = [];

  searchText: string | undefined = undefined;
  defaultPagination: string | undefined = undefined;

  // pagination
  page: number = 1;

  // checkbox
  isChecked: boolean = false;
  checkedIdList: any[] = [];
  id: string = "";

  // filter
  isCollapsed: boolean = true;
  filterStatus: boolean = false;
  actualList: boolean = true;

  constructor(
    private router: Router,
    private dataService: DataService,
    private modelService: ConfirmationModalService
  ) {}

  ngOnInit() {
    this.getAllDocumentDetails();
  }

  getAllDocumentDetails() {
    this.dataService.getAll().subscribe((result: any) => {
      this.vesselManagementData = result.response.rows.map((val:any)=>val.doc)
    });
  }

  applyFilter() {
    this.actualList = false;
    this.filterStatus = true;
  }

  reset() {
    this.actualList = true;
    this.filterStatus = false;
  }

  onDelete(_id: string) {
    const modal = this.modelService.createConfirmationModal();
    modal.content.showConfirmationModal(
      "Delete confirmation",
      "Are you sure want to delete " + name + "?"
    );

    modal.content.onClose.subscribe((result: boolean) => {
      if (result === true) {
        // when pressed Yes
        this.dataService.deleteById(_id).subscribe(() => {
          this.getAllDocumentDetails();
        });
      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
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

  viewDocument(_id: string) {
    this.router.navigate(["/vessel-management/view"], {
      queryParams: { id: _id },
    });
  }

  editDocument(_id: string) {
    this.router.navigate(["/vessel-management/edit"], {
      queryParams: { id: _id },
    });
  }

  refreshPage() {
    this.getAllDocumentDetails();
  }
}
