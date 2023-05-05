import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr"
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder ,
    private service: AuthService, private router: Router,private toastr: ToastrService,) {
      sessionStorage.clear();
  }

userdata:any;

  loginform = this.builder.group({
    username: this.builder.control('', [Validators.required, Validators.minLength(5)]),
    password: this.builder.control('',[Validators.required, ]),
   
  })


  proceedlogin() {
    if (this.loginform.valid) {
      // if (this.registerform.controls['id'].value === 'Negin') {
      //   console.log('this is correct');
      //   this.toastr.success('please contact admin for enable access','Registered Successfuly!');

      // }
      // this.service.proceesdreginster(this.loginform.value).subscribe(res=>{
      //   this.toastr.success('please contact admin for enable access','Registered Successfuly!');
      //   this.router.navigate(['login']);
      // });
      this.service.GetbyCode(this.loginform.value.username).subscribe( res =>{
        this.userdata=res;
        console.log(this.userdata);
        if(this.userdata.password===this.loginform.value.password){
          if(this.userdata.isactive){
            sessionStorage.setItem('username',this.userdata.id);
            sessionStorage.setItem('userrole',this.userdata.role);
            this.router.navigate(['']);
          }else{
            this.toastr.warning('it is not active boro ba bozorgtaret bia')
          }
        }else{
          this.toastr.warning('it is not valid');
        }
      });
    }
    else {
      this.toastr.warning('please enter valid data');
    }
  }

  ngOnInit(): void {
  }

}
