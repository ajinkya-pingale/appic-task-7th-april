import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  originaldata = []
  employeeData = []
  tableColumn = []
  errorMsg: any = null;
  ageRangeOption = [
    { label:'0-20 Years', value: 20 },
    { label:'20-40 Years', value: 40 },
    { label:'40-60 Years', value: 60 },
    { label:'60-80 Years', value: 80 }
  ]
  ngOnInit(): void {
    this.getEmployeeData()
  }

  getEmployeeData(){
    this.commonService.apiCall('get',`/api/v1/employees`).subscribe(
      data=>{
        if(data['status'] == 'success'){
          this.originaldata = data['data'];
          this.employeeData = data['data'];
          if(this.employeeData.length > 0){
            var singleEmployeeData = this.employeeData[0];
            for(let eachKey of Object.keys(singleEmployeeData)){
              this.tableColumn.push(eachKey)
            }
          }
        }
      },error=>{
        this.errorMsg = error['error'];
      }
    )
  }

  filterData(event){
    this.employeeData = []
    let selectedAgeRange = this.ageRangeOption.find((e)=>e['label'] == event);
    console.log(event, selectedAgeRange)
    for( let eachEmployee of this.originaldata ){
      if(eachEmployee.employee_age <= selectedAgeRange['value'] && eachEmployee?.employee_age > (selectedAgeRange['value'] - 20) ){
        console.log(eachEmployee.employee_age);
        this.employeeData.push(eachEmployee)
      }
    }
  }

  resetFilter(data){
    if(data){
      this.employeeData = this.originaldata;
    }
  }

}
