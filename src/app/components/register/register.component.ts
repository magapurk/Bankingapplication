import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { register } from 'src/assets/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accno: any;
   NgForm:any;
   registerForm: FormGroup;
   submitted = false;
  registerdata: any;
  regmodel:register[];
  constructor(private router:Router,private formBuilder: FormBuilder,private httpService:HttpClient) { }
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
     });
  }
  get fval() {
    return this.registerForm.controls;
    }
  onSubmit(){   
    this.submitted = true;
    if (this.registerForm.invalid) {
    return;
    }
    alert('form fields are validated successfully!');
    localStorage.setItem('accountnum', "123456789");
    localStorage.getItem("accountnum");
    this.router.navigateByUrl('/showbal');
   
  }
  onCancel(){
    this.router.navigateByUrl('/login');
  }
  updateData(){
    this.httpService.post("","regmodel").subscribe((data:any)=>{
      this.registerdata=data;
      console.log(this.registerdata);
    })
  }
}
