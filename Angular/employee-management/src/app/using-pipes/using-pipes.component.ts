import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrls: ['./using-pipes.component.css']
})
export class UsingPipesComponent implements OnInit {

  monthlySalary: number = 10000;
  userName: string = "Mayank";
  delayTime: string = "5000"

  constructor() { }

  ngOnInit(): void {
  }

}
