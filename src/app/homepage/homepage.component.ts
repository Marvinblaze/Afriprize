import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/api/products/products.service';
import { SessionService } from '../shared/storage/session.service';
import { CartserviceService } from '../shared/api/carts/cartservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  public menucollapse = true;

  logo1 = "../../assets/images/1 13.svg";
  

  public totalItem : number = 0;
  public searchTerm !: string;

  constructor(private list:ProductsService, private session: SessionService, private cartservice: CartserviceService){}
  
  
  ngOnInit(): void {

    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
  }
  
  }

  // listproduct(event:any){

  //   if(this.listsearch){
  //     this.list.listsingle(this.listsearch).subscribe(res =>{

  //       this.listsearch = res
  //       console.log(res)
  //     })
  //   }
  // }


