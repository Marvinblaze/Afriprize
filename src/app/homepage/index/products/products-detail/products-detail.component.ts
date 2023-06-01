import { Component } from '@angular/core';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent {


  product: any[]= [
    {
      images: '../../../../../assets/images/Rectangle 955 (1).svg'
    },
    {
      images: '../../../../../assets/images/Rectangle 956 (1).svg'
    },
    {
      images: '../../../../../assets/images/Rectangle 955 (1).svg'
    },
    {
      images: '../../../../../assets/images/Rectangle 956 (1).svg'
    }
  ]





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
    }

  ]

}
