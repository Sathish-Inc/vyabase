import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';

import { TreeRouting } from './tree.routing';
import { TreeModule } from '@circlon/angular-tree-component';

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    TreeRouting,
    TreeModule
  ]
})
export class TreesModule { }
