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
  info: any;
  fromdate: any;
  todate: any;
  head:any;
  tabledata: any;
  datashow=[
    [
       "10001",
       "10002",
       10.00,
       "CREDIT",
       "A"
    ],
    [
      "10001",
      "10002",
      10.00,
      "CREDIT",
      "A"
   ],
   [
    "10001",
    "10002",
    10.00,
    "CREDIT",
    "A"
 ],
 [
  "10001",
  "10002",
  10.00,
  "CREDIT",
  "A"
],
[
  "10001",
  "10002",
  10.00,
  "CREDIT",
  "A"
],
[
  "10001",
  "10002",
  10.00,
  "CREDIT",
  "A"
],
[
  "10001",
  "10002",
  10.00,
  "CREDIT",
  "A"
],
  ]
   
  constructor(private router: Router, private httpService: HttpClient,) {
   
   this.tabledata=this.datashow;

  }
  accountvalue: any;
  ngOnInit() {
    console.log(this.tabledata)
    this.accountvalue = localStorage.getItem("accountnum");
    if (this.accountvalue == null || this.accountvalue == undefined) {
      this.router.navigateByUrl('/login');
    }
  }
  getData() {
    this.httpService.get('http://localhost:5000/api/Account/GetHistory?&accno=' + this.accountvalue +'&frmDate=' +this.fromdate + '&todate='+this.todate).subscribe((data: any) => {
      this.info = data;
      console.log(this.info);
    })
  }
  createPdf() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('History', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);

    (doc as any).autoTable({
      head: [['ID', 'NAME', 'DESIGNATION', 'DEPARTMENT','TransStatus']],
      body: this.datashow,
      theme: 'plain',
      tableLineColor: [189, 195, 199],
      tableLineWidth: 0.75,
      //startY: 60,
      // margin: {
      //     top: 60
      // },
    })
  
   // doc.output('dataurlnewwindow')
   doc.save("Table.pdf");
}
//API
// createPdf() {
//   var doc = new jsPDF();

//   doc.setFontSize(18);
//   doc.text('History', 11, 8);
//   doc.setFontSize(11);
//   doc.setTextColor(100);

//   (doc as any).autoTable({
//     head: [['ID', 'NAME', 'DESIGNATION', 'DEPARTMENT','TransStatus']],
//     body: this.info,
//     theme: 'plain',
//     tableLineColor: [189, 195, 199],
//     tableLineWidth: 0.75,
//     //startY: 60,
//     // margin: {
//     //     top: 60
//     // },
//   })

//  // doc.output('dataurlnewwindow')
//  doc.save("Table.pdf");
// }
}
