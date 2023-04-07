import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { ChildTableComponent } from './child-table/child-table.component';


@NgModule({
  declarations: [
    TableComponent,
    ChildTableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class TableModule { }
