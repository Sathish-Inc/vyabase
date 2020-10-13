import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataEntryComponent } from './data-entry/data-entry.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {
    path: "add",
    component: DataEntryComponent
  },
  {
    path: "edit",
    component: EditComponent
  },
  {
    path: "",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryRouting {}