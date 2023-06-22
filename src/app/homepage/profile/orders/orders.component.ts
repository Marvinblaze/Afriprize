import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileService } from 'src/app/shared/api/profile/profile.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  


  userobject: string | any;
  country: string | any
  

  profileobject: any;

  selectedImage: any;
  
  
  constructor( private route:Router, private location: Location,private Pservice: ProfileService,private service: ProductsService, private toast: NgToastService){
    const storedImage = localStorage.getItem('profilePicture');
    if (storedImage) {
      this.selectedImage = storedImage;
    } else {
      this.selectedImage = '../../../assets/images/Ellipse 15.svg'; // Set default image if no stored image is found
    }
  }
 
  isOrderDetailsVisible: boolean = false;
  
  ngOnInit(): void {

    this.getdata()
  }


  signout(){
    sessionStorage.clear();
    this.toast.success({
      detail: 'You have logout',
      summary: 'User is Logged out!!!',
      duration: 5000,
    });
    this.route.navigate(['/']);
  }


  toggleOrderDetails() {
    this.isOrderDetailsVisible = !this.isOrderDetailsVisible;
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
