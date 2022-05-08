import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { login } from 'src/app/models/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountNo: any;
  password: any;
  logindis: boolean;
  submitted = false;
  isChecked: true;
  loginData: any;
  showUserName : boolean = true;
  loginmodal: login = {
    accountNo: "",
    isUserName: true,
    password: "",
    username: ""
  };

  constructor(private router: Router, private httpService: HttpClient) { }
  labelName: string = "UserName";
  ngOnInit() {

  }
  onSubmit() {
    this.submitted = true;
  }
  login() {    
    this.httpService.post("http://localhost:5000/api/Account/AccLogin", this.loginmodal).subscribe((data: any) => {
        if (data.statusCode == 200) {
          localStorage.setItem('accountnum', data.message);
          this.router.navigateByUrl('/showbal');
        } else {
          alert(data.message);
        }
      });
  }
  onRegister() {
    this.router.navigateByUrl('/register')
  }
  showlabel(index) {
    debugger;
    if (index == '0') {
      this.labelName = "UserName";
      this.showUserName = true;
      this.loginmodal.isUserName = true;
    }
    else {
      this.labelName = "Account Number";
      this.loginmodal.isUserName = false;
      this.showUserName = false;
    }
  }
}
