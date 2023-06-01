import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {



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

  ]


  customClass = 'customClass';
}
