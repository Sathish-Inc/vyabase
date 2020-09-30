import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

export const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "vessel-management",
        loadChildren: () =>
          import("./module/vessel-management/vessel-management.module").then(
            (m) => m.VesselManagementModule
          ),
      },
      {
        path: "question-management",
        loadChildren: () =>
          import(
            "./module/question-management/question-management.module"
          ).then((m) => m.QuestionManagementModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
