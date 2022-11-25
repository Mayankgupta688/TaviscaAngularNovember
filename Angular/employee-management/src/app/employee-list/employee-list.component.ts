import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import IEmployee from '../interfaces/IEmployee';
import EmployeeService from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employeeList: IEmployee[] = [];
  filteredList: IEmployee[] = [];
  employeeImage = "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg";

  constructor(private _employeeService: EmployeeService) {
    debugger;
    this._employeeService.getEmployeeData();
    this._employeeService.employeeEvent.subscribe((data) => {
      if (data == "employees_recieved") {
        this.employeeList = this._employeeService.employeeList;
        this.filteredList = this.employeeList;
      }
    })
  }

  deleteEmployee(event: any) {
    debugger;
  }

  receiveEventData(event: any) {
    if (event.actionType == "Delete All") {
      this.employeeList = [];
    }

    if (event.actionType == "Get Employees") {

    }
  }

  filterEmployee(filterText: string) {
    this.filteredList = this.employeeList.filter((employee) => {
      return employee.name.indexOf(filterText) > -1
    })
  }

}
