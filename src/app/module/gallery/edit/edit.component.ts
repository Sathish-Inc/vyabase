/**
 * Copyright 2020 Vyasaka Technologies
 */

import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
// import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

// import { JsonReaderService } from "../../../services/json-reader.service";
// import { DataService } from "../data.service";
import { Gallery } from "../gallery.model";

// import { Batch } from "../../../model/batch.model";
import { DateFormatter } from "../../../utils/date-formatter";
// import { mapJsonToObject } from "../../../utils/json2object";
import { MasterMenuData } from "../../master/master-menu.model";
import { GalleryService } from "../services/gallery.service";
import { MasterService } from "../../master/services/master.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  // dropdown
  masterData: MasterMenuData[] = [];
  publishStatus: string[] = ["Yes", "No"];
  // batchData: Batch[] = [];
  id: string = "";

  // component
  galleryForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  gallery: Gallery = new Gallery();
  alertMsg: boolean | undefined = undefined;
  orderRange: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // master service
  master_id = "76839d2802711ecf2a0d9cbda9000d21";
  pid = "INEVITO-EVITO-COMPANY-GALLERY-MASTER";

  constructor(
    // private router: Router,
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private masterService: MasterService
  ) {}

  ngOnInit() {
    this.galleryForm = new FormGroup({
      batchId: new FormControl("", [Validators.required]),
      title: new FormControl("", Validators.required),
      galleryLocation: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      galleryGroup: new FormControl("", Validators.required),
      order: new FormControl(""),
      publish: new FormControl(""),
    });

    if (this.route.snapshot.queryParamMap.get("id")) {
      // @ts-ignore TS2322
      this.id = this.route.snapshot.queryParamMap.get("id");
      this.getGalleryDetailById(this.id);
    }

    this.getAllMasterDetails();
  }

  getAllMasterDetails() {
    this.masterService.getById(this.master_id, this.pid).subscribe((resp) => {
      console.log(resp);
      if (resp) {
        this.masterData = resp.masterMenu;
      }
    });
  }

  getGalleryDetailById(id: string) {
    this.galleryService.getGalleryById(id).subscribe((resp: any) => {
      this.updateEditView(resp);
    });
  }

  updateEditView(gallery: any) {
    this.galleryForm.patchValue({
      order: gallery.order,
      title: gallery.title,
      galleryLocation: gallery.galleryLocation,
      galleryGroup: gallery.galleryGroup,
      description: gallery.description,
      publish: gallery.publish,
    });
  }

  get f() {
    return this.galleryForm.controls;
  }

  onFormSubmit(data: any) {
    this.submitted = true;

    // if (this.galleryForm.invalid) {
    //   this.alertMsg = false;
    //   return;
    // }
    this.alertMsg = true;

    this.gallery.title = data.title;
    this.gallery.order = data.order;
    this.gallery.galleryLocation = data.galleryLocation;
    this.gallery.description = data.description;
    this.gallery.galleryGroup = data.galleryGroup;
    this.gallery.updatedOn = DateFormatter.toJson(new Date());
    this.gallery.publish = data.publish;
    // @ts-ignore TS2345
    this.galleryService
      .editGalleryById(this.gallery, this.id)
      .subscribe((result: any) => {
        console.log("Gallery is success: ", result);
      });
  }

  hasError = (controlName: string, errorName: string) => {
    return this.galleryForm.controls[controlName].hasError(errorName);
  };
}
