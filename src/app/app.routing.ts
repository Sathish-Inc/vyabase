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
        path: "sample",
        loadChildren: () =>
          import("./module/sample/sample.module").then((m) => m.SampleModule),
      },
      {
        path: "user-application",
        loadChildren: () =>
          import("./module/user/user.module").then((m) => m.UserModule),
      },
      {
        path: "vessel-management",
        loadChildren: () =>
          import("./module/vessel-management/vessel-management.module").then(
            (m) => m.VesselManagementModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
