import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent implements OnInit {

  constructor(private service:AuthService,private dialog:MatDialog) {
    this.loaduser();
   }

  userlist:any;
  datasource:any;

  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;
  loaduser(){
    this.service.GetAll().subscribe(res=>{
      this.userlist=res;
      this.datasource=new MatTableDataSource(this.userlist);
      this.datasource.paginator=this.paginator;
      this.datasource.sort=this.sort;


    });
    
  }

  displayedColumns: string[] = ['username', 'name', 'email','role', 'status','action'];


  updateuser(code:any){
    const popup= this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data:{
        usercode:code
      }
    })
    popup.afterClosed().subscribe(res=>{
      this.loaduser();
    });
  }


  opendialog(){
    this.loaduser();
  }


  ngOnInit(): void {
  }

}
