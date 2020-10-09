/**
 * Copyright 2020 Vyasaka Technologies
 */

import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { mapJsonToObject } from "../../../utils/json2object";
// import { DataService } from "../data.service";
import { GalleryService } from "../services/gallery.service";
import { Gallery } from "../gallery.model";
@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  gallery: Gallery = new Gallery();
  galleryForm: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    // private dataService: DataService,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get("id")) {
      const id = this.route.snapshot.queryParamMap.get("id");
      this.getGalleryDetailsById(id);
    }

    this.galleryForm = new FormGroup({
      batchId: new FormControl(""),
      title: new FormControl(""),
      galleryLocation: new FormControl(""),
      description: new FormControl(""),
      galleryGroup: new FormControl(""),
      publish: new FormControl("")
    });
  }

  getGalleryDetailsById(id: any) {
    // this.dataService.get(id).subscribe((data: any) => {
      this.galleryService.get(id).subscribe((data: any) => {
      this.gallery = mapJsonToObject(data, Gallery);
      this.showGalleryDetails(this.gallery);
    });
  }

  showGalleryDetails(gallery: any) {
    this.galleryForm.patchValue({
      batchId: gallery.batchId,
      title: gallery.title,
      galleryLocation: gallery.galleryLocation,
      galleryGroup: gallery.galleryGroup,
      description: gallery.description,
      publish: gallery.publish
    });
  }
}
