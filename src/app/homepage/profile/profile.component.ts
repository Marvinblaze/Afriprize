import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/storage/session.service';
import { ProfileService } from 'src/app/shared/api/profile/profile.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {


  withdrawForm: FormGroup | any;

  submitted = false;
  error = '';

  @ViewChild('depositForm') depositFormRef!: ElementRef<HTMLFormElement>;

  constructor(
    private formBuilder: FormBuilder,
    private Pservice: ProfileService,
    private router: Router,
    private service: ProductsService,
    private toast: NgToastService
  ) {
    const storedImage = localStorage.getItem('profilePicture');
    if (storedImage) {
      this.selectedImage = storedImage;
    } else {
      this.selectedImage = '../../../assets/images/Ellipse 15.svg'; // Set default image if no stored image is found
    }
  }

  defaultimage = '../../../assets/images/Ellipse 15.svg';

  balance: number = 0;

  userobject: string | any;
  country: string | any;

  paystackurl: string | any;

  profileobject: any;

  id: any;
  selectedImage: any = '../../../assets/images/Ellipse 15.svg';


  

  bankCode: string = '';
  accountNumber: string = '';
  verificationResult: any = null;

  banks: any[] = [];
  selectedBank: any;
  verificationStatus: boolean | undefined;
  verificationErrorMessage: string = "";

  verificationResponse: any;
  ngOnInit(): void {
    this.getdata();
    this.formInit();
    this.initializeDepositForm();

    this.selectedImage = localStorage.getItem('profilePicture');
    this.onsubmit();
   
  }






  formInit() {
    this.withdrawForm = this.formBuilder.group({
      withdrawalAmount: ['', Validators.required],
      bankSelect: ['', Validators.required],
      accountNumber: ['', Validators.required],
      // Add other form controls if needed
    });

  }

  initializeDepositForm(): void {
    const depositForm = this.depositFormRef.nativeElement;

    depositForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const amountInput = document.getElementById(
        'amountInput'
      ) as HTMLInputElement;
      const paymentMethodSelect = document.getElementById(
        'paymentMethodSelect'
      ) as HTMLSelectElement;
      const selectedPaymentMethod = paymentMethodSelect.value;

      switch (selectedPaymentMethod) {
        case 'bank':
          // Redirect to Paystack bank transfer page
          window.location.href = 'https://paystack.com/bank-transfer';
          break;
        case 'card':
          // Redirect to Paystack credit card page
          window.location.href = 'https://paystack.com/credit-card';
          break;
        case 'wallet':
          // Redirect to Paystack e-wallet page
          window.location.href = 'https://paystack.com/e-wallet';
          break;
        default:
          // Handle any other payment method if needed
          break;
      }
    });
  }

  deposit(): void {
    // Redirect to Paystack page
    window.location.href = 'https://paystack.com';
  }

  // fetchBanks() {

  //   this.service.banks().subscribe(
  //     (response: any) => {
  //       if (response.isSuccess && response.status === 200) {
  //         this.banks = response.data;
  //         console.log('Banks retrieved:', this.banks);
  //       } else {
  //         console.error('Failed to retrieve banks:', response.message);
  //       }
  //     },
  //     (error: any) => {
  //       console.error('Error retrieving banks:', error);
  //     }
  //   );
  // }

  withdraw() {
    const selectedBankId = this.selectedBank;
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

  onsubmit() {


    type PostBody = {
      amount: string,
      bank_code: string;
      account_number: string;
      account_name: string;
      reason: string;
    }

    const postbody:  PostBody = {
      amount: this.withdrawForm.value.withdrawalAmount,
      bank_code: this.selectedBank,
      account_number: this.withdrawForm.value.accountNumber,
      account_name: 'OBIOHA MCDAVID CHIBUEZE',
      reason: 'flexing'
    }
 

    console.log(postbody)

    

  
    this.service.verifyAccount(postbody).subscribe(
      (data: any) => {
        console.log(data);

        console.log('Account verification result:', data);


              this.verificationResponse = data;
    
              if(this.verificationResponse.status ==='success'){
                window.location.href = 'https://paystack.com/payment';
              }
              if (data.isSuccess && data.status === 200) {
              } else {
                console.error('Failed to verify account:', data.message);
                // this.verificationErrorMessage =
                //   'Unable to verify user. Please try again.';
              }
            },
            (error: any) => {
              console.error('Error verifying account:', error);
              this.verificationErrorMessage = error.message;
                'An error occurred while verifying the user. Please try again.';
            }
          );
        }
    

  Accountverify(): void {
    // if (this.banks && this.accountNumber) {

    type PostBody = {
      withdrawalAmount: string,
      bankSelect: string;
      accountNumber: string;
    }

    const postbody:  PostBody = {
      withdrawalAmount: this.withdrawForm.value.withdrawalAmount,
      bankSelect: this.withdrawForm.value.selectedBank,
      accountNumber: this.withdrawForm.value.accountNumber,
    }

    console.log(postbody)

    

  
    this.service.verifyAccount(postbody).subscribe(
      (data: any) => {
        console.log(data); 

    
      }

    );
  
  }



  balancefund() {
    const amount = 2000;

    this.service.userwallet(amount).subscribe(
      (data) => {
        if (data.status === 200) {
          this.paystackurl = data.paystack.data.authorization_url;

          console.log(this.paystackurl);
          window.location.href = this.paystackurl;
        } else {
          // Handle error or display a message to the user
          console.error('Failed to create authorization URL:', data.message);
        }
        console.log('Wallet funded successfully:', data);
      },
      (error) => {
        console.error('Failed to fund walllet', error);
      }
    );
  }

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
          console.error(error);
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

  getdata() {
    this.Pservice.getprofile().subscribe((res: any) => {
      console.log(res);
      this.profileobject = res.user.firstname;
      this.userobject = res.user.lastname;
      this.country = res.user.country;

      this.router.navigate(['profile']);
      // console.log(res);
      // console.log(this.country);
    });
  }

  signout() {
    sessionStorage.clear();
    this.toast.success({
      detail: 'You have logout',
      summary: 'User is Logged out!!!',
      duration: 5000,
    });
    this.router.navigate(['/']);
  }

  deleteaccount() {
    this.Pservice.deleteproduct().subscribe((res) => {
      sessionStorage.getItem('token');
      this.router.navigate(['/']);
    });
  }

  goto() {
    this.router.navigate(['homepage/Help']);
  }
}
