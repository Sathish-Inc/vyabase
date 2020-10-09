/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DataService } from "./data.service";

import { MasterListComponent } from "./master-list/master-list.component";
import { MasterMenuComponent } from "./master-menu/master-menu.component";
import { MasterRouting } from "./master.routing";

@NgModule({
  declarations: [MasterMenuComponent, MasterListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MasterRouting],
  providers: [DataService]
})
export class MasterModule {}
