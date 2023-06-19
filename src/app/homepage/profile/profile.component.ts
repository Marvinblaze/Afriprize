import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/storage/session.service';
import { ProfileService } from 'src/app/shared/api/profile/profile.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private Pservice: ProfileService, private router: Router, private service: ProductsService) {
    const storedImage = localStorage.getItem('profilePicture');
  if (storedImage) {
    this.selectedImage = storedImage ;
  }else {
    this.selectedImage = '../../../assets/images/Ellipse 15.svg'; // Set default image if no stored image is found
  }
  }
  
  
  

  balance: number = 72540.99;

  userobject: string | any;
  country: string | any;


  
  

  profileobject: any;

  id: any;
  selectedImage: any;

  bankCode: string = '';
  accountNumber: string = '';
  verificationResult: any = null;

  banks: any[] = [];


  verificationStatus: boolean | undefined;
  verificationErrorMessage: string | undefined;
  
  ngOnInit(): void {
    this.getdata()


  }  
  
  
  // onAccountNumberInput(event: any): void {
  //   this.accountNumber = event.target.value;
  // }
  
  withdraw(){
  this.service.banks().subscribe(
    (response: any) => {
      if (response.isSuccess && response.status === 200) {
        this.banks = response.banks.data;
        console.log('Banks retrieved:', this.banks);
      } else {
        console.error('Failed to retrieve banks:', response.message);
      }
    },
    (error: any) => {
      console.error('Error retrieving banks:', error);
    }
  );
}



verifyAccount(): void {
  if (this.bankCode && this.accountNumber) {
    this.service.verifyAccount(this.bankCode, this.accountNumber).subscribe(
      (response: any) => {

        this.verificationStatus = response.isSuccess;
        if (response.isSuccess && response.status === 200) {
          this.verificationResult = response;
          console.log('Account verification result:', this.verificationResult);
        } else {
          console.error('Failed to verify account:', response.message);
          this.verificationErrorMessage = "Unable to verify user. Please try again.";
        }
      },
      (error: any) => {
        console.error('Error verifying account:', error);
        this.verificationErrorMessage = "An error occurred while verifying the user. Please try again.";
      }
    );
  }
}



  // withdraw(){
  //   this.service.banks().subscribe(
  //     (response: any) => {
  //       console.log('Withdrawal response:', response);
  //       // Handle the response data
  //     },
  //     (error: any) => {
  //       console.error('Withdrawal error:', error);
  //       // Handle the error
  //     }
  //   );
  // }


  balancefund(amount: number){

    this.service.userwallet(amount).subscribe(
      data => {

        this.balance += amount;
        console.log('Wallet funded successfully:', data);
      },
      error => {
        console.error('Failed to fund walllet', error)
      }
    )

    };


  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedImage = URL.createObjectURL(file);
    localStorage.setItem('profilePicture', this.selectedImage);
    // this.selectedImage = event.target.files[0];
  }

  updateProfileImage(event: Event) {
    event.preventDefault();
  
    if (!this.selectedImage) {
     
      const formData = new FormData();
      formData.append('profilePicture', this.selectedImage);
      
      this.Pservice.imageupdate(formData).subscribe(
        (response: any) => {
          console.log('Profile picture uploaded successfully:', response);
          // Handle the response as needed
          localStorage.removeItem('profilePicture');
        },
        (error: any) => {
          console.error(error)
          // Image update failed, handle the error or show an error message
        }
      );
    }
  

  }


  // updateimage(){



  //   let formdata = new FormData();
  //   formdata.append('image', this.url)
  //   this.Pservice.imageupdate(formdata).subscribe((data:any) =>{
  //     console.log(data)
  //   } )
  // }

  getdata(){


    // type PostBody = {
    //   firstname: string
    //   lastname: string
    

      
    // }

    // const postbody: PostBody = {
    //   firstname: this.firstname,
    //   lastname: this.loginForm.value.password,

    // };
    
    this.Pservice.getprofile().subscribe(
      (res:any) =>{
        console.log(res)
        this.profileobject = res.user.firstname;
        this.userobject = res.user.lastname;
        this.country = res.user.country;

        this.router.navigate(['profile'])
        console.log(this.profileobject)
        console.log(this.country)

      }
    )
  }



  deleteaccount(){
    this.Pservice.deleteproduct().subscribe(res =>{

      sessionStorage.getItem('token')
      this.router.navigate(['homepage'])
    })
  }



  goto(){
    this.router.navigate(['homepage/Help']);
  }
  
}
