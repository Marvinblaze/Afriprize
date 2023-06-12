import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/api/products/products.service';
import { SessionService } from '../shared/storage/session.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  public menucollapse = true;

  logo1 = "../../assets/images/1 13.svg";
  

  listsearch: string |any;

  constructor(private list:ProductsService, private session: SessionService){}
  
  
  ngOnInit(): void {
    this.listproduct
  }

  listproduct(event:any){

    if(this.listsearch){
      this.list.listsingle(this.listsearch).subscribe(res =>{

        this.listsearch = res
        console.log(res)
      })
    }
  }


}
