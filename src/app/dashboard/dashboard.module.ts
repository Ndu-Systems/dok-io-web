import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DashboardRoutingModule,
  declarations
} from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [...declarations]
})
export class DashboardModule {}
