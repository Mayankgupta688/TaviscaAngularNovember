import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app-component/app.component";
import { DataInterpolationComponent } from './data-interpolation/data-interpolation.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from "@angular/common/http";
import { CurrentTimeComponent } from './current-time/current-time.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';
import { EmployeeFooterComponent } from './employee-footer/employee-footer.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { FilterEmployeesComponent } from './filter-employees/filter-employees.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [AppComponent, DataInterpolationComponent, EmployeeDetailsComponent, EmployeeListComponent, CurrentTimeComponent, EmployeeHeaderComponent, EmployeeFooterComponent, EmployeeCountComponent, FilterEmployeesComponent],
    bootstrap: [EmployeeListComponent]
})
export default class AppModule { }