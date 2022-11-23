import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app-component/app.component";
import { DataInterpolationComponent } from './data-interpolation/data-interpolation.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, DataInterpolationComponent, EmployeeDetailsComponent],
    bootstrap: [EmployeeDetailsComponent]
})
export default class AppModule { }