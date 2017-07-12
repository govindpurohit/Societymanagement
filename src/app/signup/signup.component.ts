import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgForm } from '@angular/forms';
import {Route, Router} from '@angular/router';

import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   @ViewChild('f') signUpForm:NgForm;
   hasError:boolean = false;
    errorMessage:String = "";

  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit() {
  }

  signUp(){
    this.loginService.signUp(this.signUpForm.form.value).subscribe(result => {
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
