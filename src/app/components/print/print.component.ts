import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  info: any;
  fromdate:any;
  todate:any;
  constructor(private router:Router,private httpService:HttpClient) { }
  accountvalue:any;
  ngOnInit() {
    this.accountvalue=localStorage.getItem("accountnum");
   if(this.accountvalue ==null || this.accountvalue ==undefined){
    this.router.navigateByUrl('/login');
   }
  }
  getData(){
    this.httpService.get(`/print?&accountvalue=${this.accountvalue}&fromdate=${this.fromdate}&todate=${this.todate}`).subscribe((data:any)=>{
      this.info=data;
      console.log(this.info);
    })
  }
}
