/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import moment from "moment";
import { DataService } from "../data.service";
import { VesselManagement } from "../vessel-management.model";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  // dropdown
  submitted: boolean = false;

  // component
  vesselManagementForm: FormGroup = new FormGroup({});
  minDate = new Date();
  vesselManagement: VesselManagement = new VesselManagement();
  shipTypeData: string[] = ["Offshore Support Vessel"];

  id: string = "";
  alertMsg: boolean | undefined = undefined;

  constructor(
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get("id")) {
      // @ts-ignore TS2322
      this.id = this.route.snapshot.queryParamMap.get("id");
      this.getDocumentFormEditById(this.id);
    }

    this.vesselManagementForm = this.formBuilder.group({
      imoNumber: ["", Validators.required],
      vesselName: ["", Validators.required],
      shipType: ["", Validators.required],
      flag: ["", Validators.required],
      homePort: ["", Validators.required],
      grossTonnage: ["", Validators.required],
      summerDeadWeight: ["", Validators.required],
      lengthOverall: ["", Validators.required],
      beam: ["", Validators.required],
      draught: ["", Validators.required],
      yearOfBuilt: ["", Validators.required],
      builder: ["", Validators.required],
      placeOfBuilt: ["", Validators.required],
      yard: ["", Validators.required],
      teu: ["", Validators.required],
      crude: ["", Validators.required],
      grain: ["", Validators.required],
      bale: ["", Validators.required],
      registeredOwner: ["", Validators.required],
      manager: ["", Validators.required],
    });
  }

  getDocumentFormEditById(id: string) {
    this.dataService.getById(id).subscribe((data: any) => {
      this.vesselManagement = data.doc.docs[0];
      this.updateEditView(this.vesselManagement);
    });
  }

  updateEditView(data: any) {
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

  get f() {
    return this.vesselManagementForm.controls;
  }

  onFormSubmit(data: any) {
    this.submitted = true;

    if (this.vesselManagementForm.invalid) {
      this.alertMsg = false;
      return;
    }
    this.alertMsg = true;

    this.vesselManagement.imoNumber = data.imoNumber;
    this.vesselManagement.vesselName = data.vesselName;
    this.vesselManagement.shipType = data.shipType;
    this.vesselManagement.flag = data.flag;
    this.vesselManagement.homePort = data.homePort;
    this.vesselManagement.grossTonnage = data.grossTonnage;
    this.vesselManagement.summerDeadWeight = data.summerDeadWeight;
    this.vesselManagement.lengthOverall = data.lengthOverall;

    this.vesselManagement.beam = data.beam;
    this.vesselManagement.draught = data.draught;
    this.vesselManagement.yearOfBuilt = moment(data.yearOfBuilt).format("YYYY");
    this.vesselManagement.builder = data.builder;
    this.vesselManagement.placeOfBuilt = data.placeOfBuilt;

    this.vesselManagement.yard = data.yard;
    this.vesselManagement.teu = data.teu;
    this.vesselManagement.crude = data.crude;
    this.vesselManagement.grain = data.grain;
    this.vesselManagement.bale = data.bale;
    this.vesselManagement.registeredOwner = data.registeredOwner;
    this.vesselManagement.manager = data.manager;

    this.dataService.editById(this.vesselManagement, this.id).subscribe(() => {
      this.router.navigate(["/vessel-management"]);
    });
  }
}
