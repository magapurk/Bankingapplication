import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { login } from 'src/app/models/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accno: any;
  pin: any;
  logindis: boolean;
  submitted = false;
  isChecked: true;
  loginData: any;
  loginmodel:login;
  constructor(private router: Router,private httpService:HttpClient) { }
  labelName: string = "UserName";
  ngOnInit() {

  }
  onSubmit() { this.submitted = true; }
  login() {
    localStorage.setItem('accountnum', this.accno);
    localStorage.getItem("accountnum");
    console.log(this.accno);
    if (this.accno && this.pin == "123456") {
      this.router.navigateByUrl('/showbal');
    }
  }
  onRegister() {
    this.router.navigateByUrl('/register')
  }
  showlabel(index) {
    debugger;
    this.loginmodel.logintype=index;
    if (index == '0') {
      this.labelName = "UserName";
    }
    else {
      this.labelName = "Account Number";
    }
  }
  logindata(){

    this.httpService.post("",this.loginmodel).subscribe((data:any)=>{
      this.loginData=data;
      console.log(this.loginData);
    })
  }
}
