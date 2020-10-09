/**
 * Copyright 2020 Vyasaka Technologies
 */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { DataService } from "./data.service";

import { AlertModule } from "ngx-bootstrap/alert";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgxPaginationModule } from "ngx-pagination";

import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";

import { VyaPipeModule } from "../../lib/pipes/vya.pipe.module";

import { GalleryRouting } from "./gallery.routing";

@NgModule({
  declarations: [AddComponent, EditComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VyaPipeModule,
    GalleryRouting,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [DataService]
})
export class GalleryModule {}
