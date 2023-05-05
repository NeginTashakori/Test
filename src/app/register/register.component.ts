import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr"
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // az hamide beporasm chera srvice haro dar constructor tarif mikone?

  // private toastr: ToastrService,
  constructor(private builder: FormBuilder ,
    private service: AuthService, private router: Router,private toastr: ToastrService,) {

  }//Validators.pattern('"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"')
  registerform = this.builder.group({
    id: this.builder.control('', [Validators.required, Validators.minLength(5)]),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('',[Validators.required, ]),
    email: this.builder.control('', [Validators.required, Validators.email]),
    gender: this.builder.control('', Validators.required),
    role: this.builder.control(''),
    isactive: this.builder.control(false, Validators.required),

  })
  employeedata:any;
  proceedregisteration() {
    if (this.registerform.valid) {
      // if (this.registerform.controls['id'].value === 'Negin') {
      //   console.log('this is correct');
      //   this.toastr.success('please contact admin for enable access','Registered Successfuly!');

      // }
      this.service.proceesdreginster(this.registerform.value).subscribe(res=>{
        this.toastr.success('please contact admin for enable access','Registered Successfuly!');
        this.router.navigate(['login']);
      });
    }
    else {
      this.toastr.warning('please enter valid data');
    }
  }


  ngOnInit(): void {
  }

}
