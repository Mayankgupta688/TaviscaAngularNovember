import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {

  stockUrl: string = "";
  portfolioStocks: string[] = [];

  constructor() { }

  addStockToPortfolio(): void {

    debugger;
    this.portfolioStocks = [
      ...this.portfolioStocks,
      this.stockUrl
    ]

    this.stockUrl = "";
  }

}
