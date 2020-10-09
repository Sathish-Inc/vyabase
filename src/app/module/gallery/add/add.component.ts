/**
 * Copyright 2020 Vyasaka Technologies
 */

import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
// import { Router } from "@angular/router";
import { GalleryService } from "../services/gallery.service";

import { MasterService } from "../../master/services/master.service";
// import { JsonReaderService } from "../services/json-reader.service";
// import { DataService } from "../data.service";
// import { GalleryObjectBuilder } from "../gallery-object-builder";

// import { Batch } from "../../../model/batch.model";
// import { mapJsonToObject } from "../../../utils/json2object";
// import { MasterMenuData } from "../../master/master-menu.model";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  // dropdown
  // masterData: MasterMenuData[] = [];
  masterData: any = [];
  orderRange: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  publishStatus: string[] = ["Yes", "No"];
  // batchData: Batch[] = [];

  // component
  galleryForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  alertMsg: boolean | undefined = undefined;

  // master service
  master_id = "76839d2802711ecf2a0d9cbda9000d21";
  pid = "INEVITO-EVITO-COMPANY-GALLERY-MASTER";

  // pagination
  limit = "25";

  constructor(
    private galleryService: GalleryService,
    private masterService: MasterService
  ) {}

  ngOnInit() {
    this.galleryForm = new FormGroup({
      title: new FormControl("", Validators.required),
      galleryLocation: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      galleryGroup: new FormControl("", Validators.required),
      order: new FormControl(""),
      publish: new FormControl("No"),
    });

    // JsonReaderService.getBatch("./assets/data/batch.json").subscribe(
    //   (data: any) => {
    //     this.batchData = data;
    //   }
    // );
    this.getAllDetails();
  }

  getAllDetails() {
    this.masterService.getById(this.master_id, this.pid).subscribe((resp) => {
      // const data = mapJsonToObject(result[0].masterMenuData, MasterMenuData);
      console.log(resp);
      if (resp) {
        this.masterData = resp.masterMenu;
      }
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
    console.log(data);
    this.galleryService.addGallery(data).subscribe(console.log);
    // const gallery = GalleryObjectBuilder.create(data);
    // this.galleryService.create(gallery).subscribe(() => {
    //   this.router.navigate(["/gallery"]);
    // });
  }

  hasError = (controlName: string, errorName: string) => {
    return this.galleryForm.controls[controlName].hasError(errorName);
  };
}
