import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-interpolation',
  templateUrl: './data-interpolation.component.html',
  styleUrls: ['./data-interpolation.component.css']
})
export class DataInterpolationComponent {

  userName: string = "Mayank Gupta";
  currentTime: string = this.getTime();

  getTime() {
    return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
  }

  getUserName() {
    return "TechnoFunnel";
  }

  constructor() {
    setInterval(() => {
      this.currentTime = this.getTime();
    }, 1000)
  }
}
