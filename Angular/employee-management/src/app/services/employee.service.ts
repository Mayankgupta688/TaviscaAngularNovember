import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import IEmployee from "../interfaces/IEmployee";

@Injectable({
    providedIn: "root"
})
export default class EmployeeService {
    employeeList: IEmployee[] = [];
    employeeEvent: EventEmitter<string> = new EventEmitter<string>()

    constructor(public _http: HttpClient) { }

    getEmployeeData() {
        return this._http.get("http://localhost:3000/employees")
    }
}