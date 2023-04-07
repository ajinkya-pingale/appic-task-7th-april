import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.css']
})
export class ChildTableComponent implements OnInit {
  @Input() tableData;
  @Input() columnKeys;
  defaultImage = 'https://tse1.mm.bing.net/th?id=OIP.JFFvVxqETnP44eSu7bbWPQHaHa&pid=Api&P=0&w=300&h=300'
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.tableData)
  }

}
