import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileService } from 'src/app/shared/api/profile/profile.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  


  userobject: string | any;
  country: string | any
  

  profileobject: any;

  
  
  constructor( private route:Router, private location: Location,private Pservice: ProfileService){}
 
  
  ngOnInit(): void {

    this.getdata()
  }





  getdata(){
    
    this.Pservice.getprofile().subscribe(
      (res:any) =>{
        this.profileobject = res.user.firstname;
        this.userobject = res.user.lastname;
        this.country = res.user.country;
        this.route.navigate(['orders'])
        console.log(this.profileobject)
        console.log(this.country)

      }
    )
  }

  goBack(): void {
    this.location.back();
  }


}
