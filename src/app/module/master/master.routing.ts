/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MasterListComponent } from "./master-list/master-list.component";
import { MasterMenuComponent } from "./master-menu/master-menu.component";

const routes: Routes = [
  {
    path: "master-menu",
    component: MasterMenuComponent
  },
  {
    path: "",
    component: MasterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRouting {}
