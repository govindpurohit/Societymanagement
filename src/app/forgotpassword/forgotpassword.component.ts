import { Component, OnInit ,ViewChild} from '@angular/core';
import {NgForm } from '@angular/forms';
import {Route, Router} from '@angular/router';

import {LoginService} from '../service/login.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  @ViewChild('f') passwordForm:NgForm;
  hasError:boolean = false;
  errorMessage:String = "";

  constructor(private loginSerivce:LoginService,private route:Router) { }

  ngOnInit() {
  }

  forgot(){
    this.loginSerivce.forgetPassword(this.passwordForm.form.value).subscribe(result => {
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
