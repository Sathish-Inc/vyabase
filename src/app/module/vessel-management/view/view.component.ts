/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";

import { ActivatedRoute } from "@angular/router";
import { VesselManagement } from "../vessel-management.model";

import { DataService } from "../data.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
  vesselManagement: VesselManagement = new VesselManagement();
  vesselManagementForm: FormGroup = new FormGroup({});
  id: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get("id")) {
      // @ts-ignore TS2322
      this.id = this.route.snapshot.queryParamMap.get("id");
      this.getDocumentDetailsById(this.id);
    }
    this.vesselManagementForm = this.formBuilder.group({
      imoNumber: [""],
      vesselName: [""],
      shipType: [""],
      flag: [""],
      homePort: [""],
      grossTonnage: [""],
      summerDeadWeight: [""],
      lengthOverall: [""],
      beam: [""],
      draught: [""],
      yearOfBuilt: [""],
      builder: [""],
      placeOfBuilt: [""],
      yard: [""],
      teu: [""],
      crude: [""],
      grain: [""],
      bale: [""],
      registeredOwner: [""],
      manager: [""],
    });
  }

  getDocumentDetailsById(id: any) {
    this.dataService.getById(id).subscribe((data: any) => {
      const viewData = data.doc.docs[0];
      this.showView(viewData);
    });
  }

  showView(data: any) {
    this.vesselManagementForm.patchValue({
      imoNumber: data.imoNumber,
      vesselName: data.vesselName,
      shipType: data.shipType,
      flag: data.flag,
      homePort: data.homePort,
      grossTonnage: data.grossTonnage,
      summerDeadWeight: data.summerDeadWeight,
      lengthOverall: data.lengthOverall,
      beam: data.beam,
      draught: data.draught,
      yearOfBuilt: data.yearOfBuilt,
      builder: data.builder,
      placeOfBuilt: data.placeOfBuilt,
      yard: data.yard,
      teu: data.teu,
      crude: data.crude,
      grain: data.grain,
      bale: data.bale,
      registeredOwner: data.registeredOwner,
      manager: data.manager,
    });
  }
}
