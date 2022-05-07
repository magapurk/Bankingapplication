import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { register } from 'src/app/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accno: any;
  NgForm: any;
  registerForm: FormGroup;
  submitted = false;
  registerdata: any;
  regmodel: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: HttpClient) {
    this.regmodel = new register()
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
    console.log(this.regmodel)
  }
  get fval() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    debugger;
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization: 'my-auth-token'
    //   })
    // };    
    this.httpService.post("http://localhost:5000/api/Account/accregister", this.registerForm.value).subscribe((data: any) => {
      this.registerdata = data;
      console.log(this.registerForm.value);
      localStorage.setItem('accountnum', "123456789");
      localStorage.getItem("accountnum");
      this.router.navigateByUrl('/showbal');
      alert('form fields are validated successfully!');
      //console.log(this.registerdata);
    })

  }
  onCancel() {
    this.router.navigateByUrl('/login');
  }
  updateData() {

  }
}
