import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/shared/api/carts/cartservice.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {




  openAccordionIndex: number | null = null;

  isAccordionOpen(index: number): boolean {
    return this.openAccordionIndex === index;
  }

  toggleAccordion(index: number): void {
    if (this.isAccordionOpen(index)) {
      this.openAccordionIndex = null;
    } else {
      this.openAccordionIndex = index;
    }
  }



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


  

  public filterCategory : any;
   public allProducts:Array<any>=[];

   searchKey:string ="";


  customClass = 'customClass'; 


  
  constructor(private router: Router,private list:ProductsService, private session: SessionService, private cartService : CartserviceService) {}
  
  
  ngOnInit(): void {
    this.listProduct();
   

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  
  }


  scrollToTop() {

    window.scroll(0,0);
  }





  // listProduct(){
  //   this.list.getrecommend().subscribe((data:any) =>{
      
  //       console.log('Response data:', data);
  
  //       if (data && data.products && Array.isArray(data.products)) {
  //         // Proceed with further processing
  //       } else {
  //         console.log('Invalid response data');
  //       }
  //     },
  //     (error) => {
  //       console.error('An error occurred:', error);
  //     }
  //   );
  // }

  async listProduct() {
    try {
      const data: any = await this.list.getlist().toPromise();
      console.log('Recommended products:', data); 
     
      this.allProducts = data.products.reverse();
      console.log(this.allProducts);

      this.allProducts.forEach((a: any) =>{
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.product_price});
      });

      console.log(this.allProducts)
      
  
    } catch (error) {
      console.error('An error occurred:', error);

    }
  }



  getTargetedImageUrl1(): string {
    if (this.allProducts.length > 0) {
      const firstProductPictures = this.allProducts[0].pictures;
      if (firstProductPictures.length > 1) {
        const secondPicture = firstProductPictures[1];
        return secondPicture.location;
      }
    }
    return '';
  }

  getTargetedImageUrl(): string {
    if (this.allProducts.length > 0) {
      const firstProductPictures = this.allProducts[0].pictures;
      if (firstProductPictures.length > 0) {
        const firstPicture = firstProductPictures[0];
        return firstPicture.location;
      }
    }
    return '';
  }



  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.allProducts
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  

  // async recommendProduct() {
  //   try {
  //     const { data: result } = await this.list.getrecommend().toPromise();
  //     this.allProducts = result.data.reverse();
  //     console.log(this.allProducts);
  //   } catch (Error) {
  //     console.error('An error occurred:', Error);
  //     throw Error;
  //   }
  // }
  // recommendproduct(){
  //   this.list.getrecommend().subscribe((res:any) =>{
  //     this.allProducts = res.data.reverse();
  //     console.log(this.allProducts)
  //   })
  // }catch (error: any) {
  //   // Handle the error here
  //   console.error('An error occurred:', error);
  // }

}
