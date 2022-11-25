
import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import EmployeeService from '../services/employee.service';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent {
  @Input() employeeCount: number = 1000;

  totalCount: number = 0;
  @Output() invokeParentComponent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _employeeService: EmployeeService) {
    this._employeeService.employeeEvent.subscribe(() => {
      this.totalCount = this._employeeService.employeeList.length;
    })
  }

  ngOnInit() {
    //alert(this.employeeCount);
  }

  ngOnChanges(change: SimpleChanges) {
    if (!change["employeeCount"]["firstChange"]) {
      //alert(this.employeeCount)
    }
  }

  clearEmployeeList() {
    this.invokeParentComponent.emit({
      actionType: "Delete All"
    })
  }

  getEmployeeListCount() {
    //alert(this.employeeCount)
  }

  getEmployees() {
    this.invokeParentComponent.emit({
      actionType: "Get Employees"
    })
  }

  ngDestroy() {
    console.log("Element Destroyed...")
  }
}
