import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  employeeData = []
  tableColumn = []
  errorMsg: any;
  ngOnInit(): void {
    this.getEmployeeData()
  }

  getEmployeeData(){
    this.commonService.apiCall('get',`/api/v1/employees`).subscribe(
      data=>{
        if(data['status'] == 'success'){
          this.employeeData = data['data'];
          if(this.employeeData.length > 0){
            var singleEmployeeData = this.employeeData[0];
            for(let eachKey of Object.keys(singleEmployeeData)){
              this.tableColumn.push(eachKey)
            }
          }
          console.log(this.tableColumn)
          console.log(this.employeeData)
        }
      },error=>{
        console.log(error)
        this.errorMsg = error;
      }
    )
  }

}
