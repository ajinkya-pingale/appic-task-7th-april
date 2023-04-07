import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.css']
})
export class ChildTableComponent implements OnInit {
  @Input() tableData;
  @Input() columnKeys;
  @Input() filterOptions;
  @Output() addFilter = new EventEmitter();
  @Output() resetFilter = new EventEmitter();
  @Output() sortData = new EventEmitter();
  selctedAgeRange = {}
  ascending: boolean = null;
  defaultImage = 'https://tse1.mm.bing.net/th?id=OIP.JFFvVxqETnP44eSu7bbWPQHaHa&pid=Api&P=0&w=300&h=300'
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.tableData)
  }

  onRangeSelect(event){
    this.selctedAgeRange = event.target.value;
  }

  applyFilter(){
    this.addFilter.emit(this.selctedAgeRange);
  }

  applySort(type){
    this.ascending = true;
    if(type != 'asc'){
      this.ascending = false
    }
    this.sortData.emit(type)
  }

  resetAllFilter(){
    this.selctedAgeRange = null;
    this.resetFilter.emit(true)
  }

}
