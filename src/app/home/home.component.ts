import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any;
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('username');
  }

}
