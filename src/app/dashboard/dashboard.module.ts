import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DashboardRoutingModule,
  declarations
} from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {AutoCompleteModule} from 'primeng/autocomplete';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AutoCompleteModule,
    Ng2SearchPipeModule
  ],
  declarations: [...declarations]
})
export class DashboardModule {}
