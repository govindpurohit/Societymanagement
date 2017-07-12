import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';
import {Route, Router} from '@angular/router';

import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String = '';
  password:String = '';
  @ViewChild('f') loginForm:NgForm;
  hasError:boolean = false;
  errorMessage:String = "";

  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit() {
  }

  login(){
      this.loginForm.resetForm();
      this.loginService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(result => {
            if(result.error){
              this.hasError = true;
              this.errorMessage = result.error;
            }
            this.route.navigate(["/home"]);
         },
         error => {
             console.log(error);
             this.hasError = true;
             this.errorMessage = error;
         });
  }

}
