import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
import { HttpClient } from '@angular/common/http'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  info: any
  fromdate: any;
  todate: any;
  head: any;
  showdata:boolean=false;
  
  constructor(private router: Router, private httpService: HttpClient,) {

   

  }
  accountvalue: any;
  ngOnInit() {
    this.accountvalue = localStorage.getItem("accountnum");
    if (this.accountvalue == null || this.accountvalue == undefined) {
      this.router.navigateByUrl('/login');
    }
  }
  getData() {
    this.info= [];
    this.httpService.get('http://localhost:5000/api/Account/GetHistory?&accno=' + this.accountvalue + '&frmDate=' + this.fromdate + '&todate=' + this.todate).subscribe((data: any) => {
      if(data.length > 0){
      this.info = data; 
      this.showdata = true;  
      }else{
        this.info= [];
        this.showdata= false;
        alert('No transactions found');
      }
    })
  }  
  createPdf() {
    var doc = new jsPDF();
    doc.setFontSize(18);    
    doc.setFontSize(11);
    doc.setTextColor(100);
    (doc as any).autoTable({            
      body: this.info,
      theme: 'plain',
      tableLineColor: [189, 195, 199],
      tableLineWidth: 0.75,
      didDrawCell:info =>{
      }     
    })
    let fileName =  'Statement_' + this.accountvalue + '.pdf';
    doc.save(fileName);
  }
}

