import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeedetailsRoutingModule } from './employeedetails-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeedetailsRoutingModule
  ]
})
export class EmployeedetailsModule { }
