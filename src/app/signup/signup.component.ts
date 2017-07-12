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
    flatNumber:Array <Number>= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit() {
  }

  signUp(){
    this.loginService.signUp(this.signUpForm.form.value).subscribe(result => {
            if(result.error){
              this.hasError = true;
              this.errorMessage = result.error;
            }
            this.route.navigate(["/login"]);
         },
         error => {
             console.log(error);
             this.hasError = true;
             this.errorMessage = error;
         });
  }


}
