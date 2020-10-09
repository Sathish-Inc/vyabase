import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';

import { TableService } from './services/table.service';
import { TableRouting } from './table.routing';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRouting
  ],
  providers: [TableService]
})
export class TableModule { }
