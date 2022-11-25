import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
  @Input() stockUrl: string = "";

  stockPrice = 0;
  stockPercentChange = 0;
  stockPriceChange = 0;
  stockName = "";

  constructor(private _http: HttpClient) { }

  ngOnInit() {

    this._http.get(this.stockUrl).subscribe((response: any) => {
      this.stockPrice = response["data"]["pricecurrent"]
      this.stockName = response["data"]["company"]
    });

    setInterval(() => {
      this._http.get(this.stockUrl).subscribe((response: any) => {
        this.stockPrice = response["data"]["pricecurrent"]
        this.stockName = response["data"]["company"]
      })
    }, 2000);
  }
}
