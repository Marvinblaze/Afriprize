import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/storage/session.service';
import { ProfileService } from 'src/app/shared/api/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private Pservice: ProfileService, private router: Router) {}
  
  
  
  
  
  

  userobject: string | any;
  country: string | any
  

  profileobject: any;

  id: any;

  
  
  ngOnInit(): void {
    this.getdata()
    
    
  }
  getdata(){
    
    this.Pservice.getprofile().subscribe(
      (res:any) =>{
        this.profileobject = res.user.firstname;
        this.userobject = res.user.lastname;
        this.country = res.user.country;

        this.router.navigate(['profile'])
        console.log(this.profileobject)
        console.log(this.country)

      }
    )
  }



  deleteaccount(){
    this.Pservice.deleteproduct().subscribe(res =>{

      sessionStorage.getItem('token')
      this.router.navigate(['homepage'])
    })
  }
  
}
