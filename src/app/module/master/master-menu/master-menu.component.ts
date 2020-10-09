/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormBuilder, FormGroup } from "@angular/forms";
// import { mapJsonToObject } from "../../../utils/json2object";
import { DataService } from "../data.service";

import { ActivatedRoute } from "@angular/router";
import { MasterMenuObjectBuilder } from "../master-menu-object-builder";
import { MasterMenu, MasterMenuData } from "../master-menu.model";

import { ConfirmationModalService } from "../../../lib/components/confirmation/confirmation-modal-service";
import { JsonReaderService } from "../services/json-reader.service";
import { MasterService } from "../services/master.service";

@Component({
  selector: "app-master-menu",
  templateUrl: "./master-menu.component.html",
  styleUrls: ["./master-menu.component.scss"],
})
export class MasterMenuComponent implements OnInit {
  // component
  displayView: string | undefined = undefined;
  masterData: MasterMenuData[] = [];
  masterMenuData: MasterMenuData[] = [];
  masterMenuForm: FormGroup = new FormGroup({});
  title: string = "";
  filteredMasterData: any;
  master_id: string | null = "";
  pid: string | null = "";

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private masterService: MasterService,
    private dataService: DataService,
    private modelService: ConfirmationModalService,
    private JsonReaderService:JsonReaderService
  ) {}

  ngOnInit() {
    this.masterMenuForm = this.fb.group({
      description: new FormControl(""),
      name: new FormControl(""),
    });

    console.log("query", this.route.snapshot.queryParamMap.get("id"));
    if (this.route.snapshot.queryParamMap.get("id")) {
      // JsonReaderService.getMasterMenuDocType(
      //   "./assets/data/website-master-doctype.json"
      // )
      this.JsonReaderService.getMasterMenuDocType().
      subscribe((response: any) => {
        const projectDoctype = response;
        const id = this.route.snapshot.queryParamMap.get("id");
        const pid = this.route.snapshot.queryParamMap.get("pid");
        this.master_id = id;
        if (pid) {
          this.pid = pid.toUpperCase();
        }
        const docId = `${this.pid}::${id}`;
        const data = projectDoctype.find((item: any) => item.id === docId);
        // @ts-ignore TS2532
        this.title = data.title;
        this.getAllMasterMenuDetails();
      });
    }
  }

  getAllMasterMenuDetails() {
    this.masterService.getById(this.master_id, this.pid).subscribe((result) => {
      if (result) {
        // this.masterMenuData = mapJsonToObject(
        //   result["masterMenu"],
        //   MasterMenuData
        // );
        this.masterMenuData = result.masterMenu;
        const filteredMasterData = this.masterMenuData.filter(
          (item: any) => item.application === this.title
        );
        this.masterData = filteredMasterData;
      } else {
        this.getDefaultMasterData();
      }
    });
  }

  updateEditView(code: string) {
    this.filteredMasterData = this.masterMenuData.find(
      (data: any) => data.code === code
    );
    this.masterMenuForm.patchValue({
      name: this.filteredMasterData.name,
      description: this.filteredMasterData.description,
    });
  }

  getDefaultMasterData() {
    const modal = this.modelService.createConfirmationModal();
    modal.content.showConfirmationModal(
      "Default Data confirmation",
      "Would you like to upload master with default data?" + name + "?"
    );

    modal.content.onClose.subscribe((result: boolean) => {
      if (result === true) {
        // JsonReaderService.getWebsiteMasterDefaultData(
        //   "./assets/data/website-master-default-master.json"
        // )
        this.JsonReaderService.getWebsiteMasterDefaultData().subscribe((response: any) => {
          const data = response[0]["masterMenuData"];
          this.onSaveDefaultData(data);
        });
        // when pressed Yes
      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }

  onFormSubmit(data: any) {
    let masterMenuCodePrefix: string | undefined;
    this.masterService
      .getById(this.master_id, this.pid)
      .subscribe((response: any) => {
        if (response) {
          // const masterData = mapJsonToObject(
          //   response["masterMenu"],
          //   MasterMenuData
          // );
          const masterData = response.masterMenu;
          masterMenuCodePrefix = "CODE-" + (masterData.length + 1);
        } else {
          masterMenuCodePrefix = "CODE-" + 1;
        }
        data.application = this.title;

        const masterMenu: MasterMenu = MasterMenuObjectBuilder.create(
          data,
          masterMenuCodePrefix
        );
        console.log("masterMenu", masterMenu);
        const postData = {
          master_id: this.master_id,
          docType: masterMenu.docType,
          masterMenu: masterMenu.masterMenuData[0],
          master: this.title,
        };
        this.masterService
          .appendField(this.master_id, this.pid, postData)
          .subscribe((result: any) => {
            console.log("Master Menu is success: ", result);
            this.getAllMasterMenuDetails();
            this.masterMenuForm.reset();
          });
      });
  }

  edit(data: any) {
    this.filteredMasterData.description = data.description;
    this.onUpdate();
    this.masterMenuForm.reset();
  }

  onDelete(code: string) {
    const modal = this.modelService.createConfirmationModal();
    modal.content.showConfirmationModal(
      "Delete confirmation",
      "Would you like to delete " + name + "?"
    );

    modal.content.onClose.subscribe((result: boolean) => {
      if (result === true) {
        const deleteMasterdata = this.masterMenuData.findIndex(
          (item: any) => item.code === code
        );
        if (deleteMasterdata !== -1) {
          this.masterMenuData.splice(deleteMasterdata, 1);
          this.onUpdate();
        }
        // when pressed Yes
      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }

  onSaveDefaultData(data: any) {
    const masterMenu: any = MasterMenuObjectBuilder.createDefaultData(data);
    this.dataService.appendField(masterMenu).subscribe(() => {
      this.getAllMasterMenuDetails();
    });
  }

  onUpdate() {
    const masterMenu: any = MasterMenuObjectBuilder.createDefaultData(
      this.masterMenuData
    );
    console.log("update", masterMenu);
    const postData = { masterMenu: masterMenu.masterMenuData };
    this.masterService
      .update(this.master_id, this.pid, postData)
      .subscribe(() => {
        this.getAllMasterMenuDetails();
      });
  }

  refreshPage() {
    this.getAllMasterMenuDetails();
  }
}

// ngOnInit() {
//   this.masterMenuForm = this.fb.group({
//     description: new FormControl(""),
//     name: new FormControl(""),
//   });

//   if (this.route.snapshot.queryParamMap.get("id")) {
//     JsonReaderService.getMasterMenuDocType(
//       "./assets/data/website-master-doctype.json"
//     ).subscribe((response: any) => {
//       const projectDoctype = response;
//       const id = this.route.snapshot.queryParamMap.get("id");
//       const data = projectDoctype.find((item: any) => item.id === id);
//       // @ts-ignore TS2532
//       this.title = data.title;
//       this.getAllMasterMenuDetails();
//     });
//   }
// }

// getAllMasterMenuDetails() {
//   this.masterService.getAll().subscribe((result) => {
//     if (result.length === 0) {
//       this.getDefaultMasterData();
//     } else {
//       this.masterMenuData = mapJsonToObject(
//         result[0]["masterMenuData"],
//         MasterMenuData
//       );
//       const filteredMasterData = this.masterMenuData.filter(
//         (item: any) => item.application === this.title
//       );
//       this.masterData = filteredMasterData;
//     }
//   });
// }

// updateEditView(code: string) {
//   this.filteredMasterData = this.masterMenuData.find(
//     (data: any) => data.code === code
//   );
//   this.masterMenuForm.patchValue({
//     name: this.filteredMasterData.name,
//     description: this.filteredMasterData.description,
//   });
// }

// getDefaultMasterData() {
//   const modal = this.modelService.createConfirmationModal();
//   modal.content.showConfirmationModal(
//     "Default Data confirmation",
//     "Would you like to upload master with default data?" + name + "?"
//   );

//   modal.content.onClose.subscribe((result: boolean) => {
//     if (result === true) {
//       JsonReaderService.getWebsiteMasterDefaultData(
//         "./assets/data/website-master-default-master.json"
//       ).subscribe((response: any) => {
//         const data = response[0]["masterMenuData"];
//         this.onSaveDefaultData(data);
//       });
//       // when pressed Yes
//     } else if (result === false) {
//       // when pressed No
//     } else {
//       // When closing the modal without no or yes
//     }
//   });
// }

// onFormSubmit(data: any) {
//   let masterMenuCodePrefix: string | undefined;
//   this.masterService.getAll().subscribe((response: any) => {
//     if (response.length > 0) {
//       const masterData = mapJsonToObject(
//         response[0]["masterMenuData"],
//         MasterMenuData
//       );
//       masterMenuCodePrefix = "CODE-" + (masterData.length + 1);
//     } else {
//       masterMenuCodePrefix = "CODE-" + 1;
//     }
//     data.application = this.title;

//     const masterMenu: MasterMenu = MasterMenuObjectBuilder.create(
//       data,
//       masterMenuCodePrefix
//     );
//     console.log(masterMenu);
//     this.dataService.appendField(masterMenu).subscribe((result: any) => {
//       console.log("Master Menu is success: ", result);
//       this.getAllMasterMenuDetails();
//       this.masterMenuForm.reset();
//     });
//   });
// }

// edit(data: any) {
//   this.filteredMasterData.description = data.description;
//   this.onUpdate();
//   this.masterMenuForm.reset();
// }

// onDelete(code: string) {
//   const modal = this.modelService.createConfirmationModal();
//   modal.content.showConfirmationModal(
//     "Delete confirmation",
//     "Would you like to delete " + name + "?"
//   );

//   modal.content.onClose.subscribe((result: boolean) => {
//     if (result === true) {
//       const deleteMasterdata = this.masterMenuData.findIndex(
//         (item: any) => item.code === code
//       );
//       if (deleteMasterdata !== -1) {
//         this.masterMenuData.splice(deleteMasterdata, 1);
//         this.onUpdate();
//       }
//       // when pressed Yes
//     } else if (result === false) {
//       // when pressed No
//     } else {
//       // When closing the modal without no or yes
//     }
//   });
// }

// onSaveDefaultData(data: any) {
//   const masterMenu: any = MasterMenuObjectBuilder.createDefaultData(data);
//   this.dataService.appendField(masterMenu).subscribe(() => {
//     this.getAllMasterMenuDetails();
//   });
// }

// onUpdate() {
//   const masterMenu: any = MasterMenuObjectBuilder.createDefaultData(
//     this.masterMenuData
//   );
//   this.dataService.update(masterMenu).subscribe(() => {
//     this.getAllMasterMenuDetails();
//   });
// }

// refreshPage() {
//   this.getAllMasterMenuDetails();
// }
