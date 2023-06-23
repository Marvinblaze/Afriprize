import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/storage/session.service';
import { ProfileService } from 'src/app/shared/api/profile/profile.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { RRaffledrawService } from 'src/app/shared/api/Raffles/r-raffledraw.service';
import { NgToastService } from 'ng-angular-popup';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-draws',
  templateUrl: './draws.component.html',
  styleUrls: ['./draws.component.css']
})
export class DrawsComponent implements OnInit {



  nameobject: Array<any>=[];

  public allProducts:Array<any>=[];
  
  

  ticketobject: Array<any>=[];

  startDateString: string = '';

  constructor(private datepipe:DatePipe, private router: Router, private service: ProductsService, private toast: NgToastService, private draw:RRaffledrawService){

  }


  ngOnInit(): void {
    this.getrafflelist()
    this.getraffleads()
    
  }


  isValidDate(date: string): boolean {
    return !isNaN(Date.parse(date));
  }



  getrafflelist(){
    this.draw.listraffle().subscribe(
      (data)=>{
        console.log(data.raffle)


        
        this.nameobject = data.raffle;

        const startDate = new Date(data.raffle);
        const endDate = new Date(data.raffle);

        console.log(data.raffle);

        this.startDateString = startDate.toLocaleDateString('en-US');
        const endDateString = endDate.toLocaleDateString('en-US');

        // console.log(startDateString);
        // console.log(endDateString);
      }
    )
  }
  getraffleads(){
    this.draw.Ads().subscribe(
      (data)=>{
        console.log(data);

        this.ticketobject = data.products;

        console.log(this.ticketobject)

       
      }
    )
  }


  getTargetedImageUrl(): string {
    if (this.ticketobject.length > 0) {
      const firstProductPictures = this.ticketobject[0].raffleAd.pictures;
      if (firstProductPictures.length > 0) {
        const firstPicture = firstProductPictures[0];
        return firstPicture.location;
      }
    }
    return '';
  }
  getTargetedImageUrl1(): string {
    if (this.ticketobject.length > 1) {
      const firstProductPictures = this.ticketobject[0].raffleAd.pictures;
      if (firstProductPictures.length > 1) {
        const firstPicture = firstProductPictures[1];
        return firstPicture.location;
      }
    }
    return '';
  }


  // getTargetedImageUrl1(): string {
  //   if (this.allProducts.length > 0) {
  //     const firstProductPictures = this.ticketobject[1].raffleAd.pictures;
  //     if (firstProductPictures.length > 1) {
  //       const secondPicture = firstProductPictures[1];
  //       return secondPicture.location;
  //     }
  //   }
  //   return '';
  // }


}
