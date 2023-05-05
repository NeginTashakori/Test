import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/user'

  GetAll() {
    return this.http.get(this.apiurl)
  }
  
  GetAllRole() {
    return this.http.get('http://localhost:3000/role')
  }

  GetbyCode(code: any) {
    return this.http.get(this.apiurl + '/' + code)
  }

  proceesdreginster(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }

  // update inputdata where code
  updateuser(code: any, inputdata: any) {
    return this.http.put(this.apiurl + '/' + code, inputdata);
  }

  deleteuser(code:any){
    return this.http.delete(this.apiurl + '/' + code);
  }

  IsloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  
  GetUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

}
