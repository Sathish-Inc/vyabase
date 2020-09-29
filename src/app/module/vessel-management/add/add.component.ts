/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ConfirmationModalService } from "../../../lib/components/confirmation/confirmation-modal-service";
import { DataService } from "../data.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  // dropdown
  submitted: boolean = false;
  vesselId: string = "";

  // component
  vesselManagementForm: FormGroup = new FormGroup({});
  alertMsg: boolean | undefined = undefined;

  shipTypeData: string[] = ["Offshore Support Vessel"];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private modelService: ConfirmationModalService
  ) {}

  ngOnInit() {
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

    this.dataService.add(data).subscribe(console.log);
  }

  onCancel() {
    const modal = this.modelService.createConfirmationModal();
    modal.content.showConfirmationModal(
      "Cancel confirmation",
      "Are you sure want to cancel " + name + "?"
    );

    modal.content.onClose.subscribe((result: boolean) => {
      if (result === true) {
        // when pressed Yes
        this.router.navigateByUrl("/item-master");
      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }
}
