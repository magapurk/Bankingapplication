import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { transferfunds } from 'src/app/models/transferfunds';
@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {

  updateddata: any;
  fundsmodal: transferfunds = {
    frmAccNo: "",
    toAccNo: "",
    amount: ""
  };

  constructor(private router: Router, private httpService: HttpClient) {
  }

  ngOnInit() {
    this.fundsmodal.frmAccNo = localStorage.getItem("accountnum");
    //if(this.fundsmodal.funds ==null || this.fundsmodal.funds ==undefined)
    //this.router.navigateByUrl('/login');

  }
  transferFunds() {
    if (this.fundsmodal.frmAccNo == this.fundsmodal.toAccNo) {
      alert("From account and To account can not be same");
    } else {
      this.httpService.post("http://localhost:5000/api/Account/fundTranser", this.fundsmodal).subscribe((data: any) => {
        if (data.statusCode == 500) {
          alert(data.message);
        } else {          
          this.fundsmodal.frmAccNo = "";
          this.fundsmodal.toAccNo = "";
          this.fundsmodal.amount = "";  
          alert(data.message);        
        }
      })
    }
  }
}
