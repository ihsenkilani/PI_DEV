import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { DriverService } from '../driver.service';
import { driver } from '../model/driver';



@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  barChartLabels: Label[];

  constructor(private _service: DriverService){
    this.username=[];
    this.barChartData=[
      { data: [], label: '' }
    ]
    this.workload=[];
 this.listDeliveryMan=[];
 this.barChartLabels=[];
  }
  ngOnInit(): void {
    
    this.barChartLabels= this.username;
    // ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
    this.barChartData=[
      { data: this.workload, label: 'Workload' }
    ]

    this.getlistofdeliveryman();
  }

  barChartType: ChartType = 'bar';
    barChartLegend = true;
    barChartPlugins:any = {'backgroundColor': [
      "#FF6384",
   "#4BC0C0",
   "#FFCE56",
   "#E7E9ED",
   "#36A2EB"
   ]}
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  listDeliveryMan: driver[];
  username: string[];
  workload: number[];
  title = 'bar-chart';
  
 public barChartColors: Color[] = [
  { backgroundColor: 'green' },
]

  barChartData: ChartDataSets[] ;
  /*[
    { data: [45, 37, 60, 70, 46], label: 'Task Status' }
  ];*/



  public getlistofdeliveryman(){
    let resp= this._service.getDrivers() ;
    resp.subscribe((res)=>{this.listDeliveryMan=res
    this.listDeliveryMan.forEach(el=>{
this.username.push(el.lastName)
this.workload.push(el.nbrDeliveryAffected)



    })
    
    
    
    
    });
   }
}


