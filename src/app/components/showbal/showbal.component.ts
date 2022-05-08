import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-showbal',
  templateUrl: './showbal.component.html',
  styleUrls: ['./showbal.component.css']
})
export class ShowbalComponent implements OnInit {
  accountNo: string;
  firstName: string;
  accountBalance: number
  info: any;
  updateddata: any;

  constructor(private router: Router, private httpService: HttpClient) { }

  ngOnInit() {

    this.accountNo = localStorage.getItem("accountnum");
    if (this.accountNo == null || this.accountNo == undefined) {
      this.router.navigateByUrl('/login');
    } else {
      this.showBal();
    }
  }

  counter(i: number) {
    return new Array(i);
  }
  showBal() {
    this.httpService.get('http://localhost:5000/api/Account/GetAccInfo?accno=' + this.accountNo).subscribe((data: any) => {
      debugger;
      if (data.statusCode == 500) {
        alert(data.message);
      } else {
        this.firstName = data.fName;
        this.accountBalance = data.Balance;        
      }
      
    })
  }
  // updateData(){
  //   this.httpService.post("","").subscribe((data:any)=>{
  //     this.updateddata=data;
  //     console.log(this.updateddata);
  //   })
  // }
}
