/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AlertModule } from "ngx-bootstrap/alert";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgxPaginationModule } from "ngx-pagination";

import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";

import { VyaPipeModule } from "../../lib/pipes/vya.pipe.module";
import { VesselManagementRouting } from "./vessel-management.routing";

import { DataService } from "./data.service";
@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),

    VyaPipeModule,
    VesselManagementRouting,
  ],
  entryComponents: [],
  providers: [DataService],
})
export class VesselManagementModule {}
