import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit{
  constructor(private router:Router){}
  
  user = localStorage.getItem("curUser");
  name:string=''
  mail:string=''
  ngOnInit(): void {
    if(this.user===null){
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 3000);
    }else{
      let curUser = JSON.parse(this.user)
      this.name = curUser.firstName + curUser.lastName
      this.mail = curUser.email
    }
  }
   logout(){
    localStorage.removeItem('curUser')
    this.router.navigate(['login'])
   }
}
