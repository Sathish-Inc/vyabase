import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { VyaPipeModule } from '../../lib/pipes/vya.pipe.module';

import { DataService } from "./data-entry/data.service";

import { DataEntryComponent } from './data-entry/data-entry.component';
import { DataEntryRouting } from './data-entry.routing';


@NgModule({
  declarations: [DataEntryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    DataEntryRouting,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    VyaPipeModule,
    TabsModule.forRoot()
  ],
  providers: [DataService]
})
export class DataEntryModule { }
