import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employeeDetailList = [{
    id: 1,
    name: "Mayank Gupta",
    avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
    createdAt: "23/09/2022"
  }, {
    id: 2,
    name: "Anshul Gupta",
    avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
    createdAt: "23/09/2022"
  }, {
    id: 3,
    name: "TechnoFunnel",
    avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
    createdAt: "23/09/2022"
  }]
}