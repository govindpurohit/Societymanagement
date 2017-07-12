import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

  private host:String = "http://111.93.82.91:3000";

  constructor(private http:Http) { }

  login(id,password){
    return this.http.post(this.host+"/auth/login",{"email":id,"password":password}).map(res => res.json())
      .catch(this.handleError);
  }
  handleError(error: Response | any){
    const body = error.json() || '';
    return Observable.throw(body);
  }

}
