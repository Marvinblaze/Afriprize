import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { SessionService } from 'src/app/shared/storage/session.service';
import { HostListener } from '@angular/core';
import { CartserviceService } from 'src/app/shared/api/carts/cartservice.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {


  id: string | any;
  products: any[] =[];

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





  // recommend: any[] = [

  //   {
  //     images: '../../../assets/images/Rectangle 31.svg',
  //     names: 'Win Macbook pro 2020',
  //     free: '../../../assets/images/Rectangle 955.svg'
  //   },
  //   {
  //     images: '../../../assets/images/iphone14 1.svg',
  //     names: 'Win IPhone 14 pro',
  //     free: '../../../assets/images/Rectangle 956.svg'
  //   },
  //   {
  //     images: '../../../assets/images/Rectangle 31.svg',
  //     names: 'Win Macbook pro 2020',
  //     free: '../../../assets/images/Rectangle 955.svg'
  //   },
  //   {
  //     images: '../../../assets/images/iphone14 1.svg',
  //     names: 'Win IPhone 14 pro',
  //     free: '../../../assets/images/Rectangle 956.svg'
  //   },
  //   {
  //     images: '../../../assets/images/Rectangle 31.svg',
  //     names: 'Win Macbook pro 2020',
  //     free: '../../../assets/images/Rectangle 955.svg'
  //   },
  //   {
  //     images: '../../../assets/images/iphone14 1.svg',
  //     names: 'Win IPhone 14 pro',
  //     free: '../../../assets/images/Rectangle 956.svg'
  //   },
  //   {
  //     images: '../../../assets/images/Rectangle 31.svg',
  //     names: 'Win Macbook pro 2020',
  //     free: '../../../assets/images/Rectangle 955.svg'
  //   },
  //   {
  //     images: '../../../assets/images/iphone14 1.svg',
  //     names: 'Win IPhone 14 pro',
  //     free: '../../../assets/images/Rectangle 956.svg'
  //   },

  // ];


  public filterCategory : any;


  searchKey:string ="";



  public allProducts:Array<any>=[];


  $item: any;
  
  count: number = 1;

  constructor(private route: ActivatedRoute,
    private router: Router,private list:ProductsService, private session: SessionService,
    private cartservice: CartserviceService
  ) {}

  ngOnInit(): void {
    this.listProduct();
    // console.log(this.listProduct)
    this.listingproducts()
    

    
    this.cartservice.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
 
    console.log(this.count)
    
  }



  goto(event: any) {
    this.router.navigate(['homepage/index/products/products-detail']);
    console.log()
  }





  listingproducts(){
    this.id = this.route.snapshot.paramMap.get('id')
          this.list.listsingle(this.id).subscribe( (data: any)=>{
    
            console.log(data)
            
          })
        }

// async listProduct(){
//   try {
//     const data: any = await this.list.getlist().toPromise();
//     if (!Array.isArray(data)) {
//       throw new Error('Invalid response format. Expected an array.');
//     }
//     this.allProducts = data;
//     console.log(this.allProducts);
//   } catch (error) {
//     console.error('An error occurred:', error);
//     throw error;
//   }
// }

  // async listProduct() {
  //   try {
  //     const data: any = await this.list.getlist().toPromise();
  //     this.allProducts = data;
  //     console.log(this.allProducts);
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     throw error;
  //   }
  // }

  async listProduct() {
    try {
      const data: any = await this.list.getlist().toPromise();
      console.log(data); // Check the structure of the response object
     
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
      // Handle the error appropriately (e.g., display an error message)
    }
  }
  // listProduct(){
  //   this.list.getlist().subscribe((data:any) =>{
  //     console.log(data);           // Check the structure of the response object
   
  //     this.allProducts = data.products;
  //     console.log(this.allProducts)
  //     console.log(this.allProducts[0].pictures);
      
  //     if (this.allProducts.length > 0) {
  //       const firstProductPictures = this.allProducts[0].pictures;
  //       if (firstProductPictures.length > 0) {
  //         const firstPicture = firstProductPictures[0];
  //         console.log(firstPicture);
  //       }
  //     }

  //   });
  // }




  getTargetedImageUrl1(): string {
    if (this.allProducts.length > 0) {
      const firstProductPictures = this.allProducts[0].pictures;
      if (firstProductPictures.length > 1) {
        const secondPicture = firstProductPictures[1];
        return secondPicture.location;
      }
    }
    return ''; // Return a default URL or an empty string if no second picture is available
  }

  getTargetedImageUrl(): string {
    if (this.allProducts.length > 0) {
      const firstProductPictures = this.allProducts[0].pictures;
      if (firstProductPictures.length > 0) {
        const firstPicture = firstProductPictures[0];
        return firstPicture.location;
      }
    }
    return ''; // Return a default URL or an empty string if no picture is available
  }
  
  
   scrollToTop() {


    window.scroll(0,0);
  }

  
  

  addtocart(item: any){
    this.cartservice.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.allProducts
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
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






 


  
  





  

  

  



  
  
 

  


