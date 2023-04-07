import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.css']
})
export class ChildTableComponent implements OnInit {
  @Output() tableData;
  constructor() {
    console.log(this.tableData)

   }

  ngOnInit(): void {
    console.log(this.tableData)
  }

}
