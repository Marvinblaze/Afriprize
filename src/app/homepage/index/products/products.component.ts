import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products: any[] = [

    {
      images: '../../../assets/images/Rectangle 31.svg',
      names: 'Win Macbook pro 2020',
      free: '../../../assets/images/Rectangle 955.svg'
    },
    {
      images: '../../../assets/images/iphone14 1.svg',
      names: 'Win IPhone 14 pro',
      free: '../../../assets/images/Rectangle 956.svg'
    },
    {
      images: '../../../assets/images/Rectangle 31.svg',
      names: 'Win Macbook pro 2020',
      free: '../../../assets/images/Rectangle 955.svg'
    },
    {
      images: '../../../assets/images/iphone14 1.svg',
      names: 'Win IPhone 14 pro',
      free: '../../../assets/images/Rectangle 956.svg'
    },
    {
      images: '../../../assets/images/Rectangle 31.svg',
      names: 'Win Macbook pro 2020',
      free: '../../../assets/images/Rectangle 955.svg'
    },
    {
      images: '../../../assets/images/iphone14 1.svg',
      names: 'Win IPhone 14 pro',
      free: '../../../assets/images/Rectangle 956.svg'
    },
    {
      images: '../../../assets/images/Rectangle 31.svg',
      names: 'Win Macbook pro 2020',
      free: '../../../assets/images/Rectangle 955.svg'
    },
    {
      images: '../../../assets/images/iphone14 1.svg',
      names: 'Win IPhone 14 pro',
      free: '../../../assets/images/Rectangle 956.svg'
    },

  ];


  allProducts:Array<any>=[];


  
  
  logo1 = "../../assets/images/1 13.svg";




  constructor(
    private router: Router, private list:ProductsService, private session: SessionService

  ) {}

  ngOnInit(): void {

  }




  goto(event: any) {
    this.router.navigate(['homepage/index/products/products-detail']);
    console.log()
  }


  listproduct(){
    this.list.getlist().subscribe((res:any) =>{
      this.allProducts = res.data.reverse();
      console.log(this.allProducts)
    })
  }

}
