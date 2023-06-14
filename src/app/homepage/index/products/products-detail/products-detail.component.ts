import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {


  product: any[]= [
    {
      images: '../../../../../assets/images/flipflop1.svg'
    },
    {
      images: '../../../../../assets/images/flipflop2.svg'
    },
    {
      images: '../../../../../assets/images/flipflop1.svg'
    },
    {
      images: '../../../../../assets/images/flipflop2.svg'
    }
  ];





  recommend: any[] = [

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



  
  count: number = 0;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log(this.count)
    
  }


  increment() {
    this.count++;
  
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }




}
