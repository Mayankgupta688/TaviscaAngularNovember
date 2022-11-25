import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-employees',
  templateUrl: './filter-employees.component.html',
  styleUrls: ['./filter-employees.component.css']
})
export class FilterEmployeesComponent {

  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>()
  filterText = "";

  updateParent() {
    this.notifyParent.emit(this.filterText);
  }
}
