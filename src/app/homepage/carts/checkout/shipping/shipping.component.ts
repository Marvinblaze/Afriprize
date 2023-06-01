import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  loginForm: FormGroup | any;


  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _auth: AuthenticateService,
    private _session: SessionService,
  ) {}



  ngOnInit(): void {
    this.formInit()
  }

  formInit() {
    this.loginForm = this._fb.group({
      shipping_firstname: new FormControl('', [Validators.required]),
      shipping_lastname: new FormControl('', [Validators.required]),
      shipping_phone: new FormControl('', [Validators.required]),
      shipping_additional_phone: new FormControl('', [Validators.required]),
      shipping_address: new FormControl('', [Validators.required]),
      shipping_additional_address: new FormControl('', [Validators.required]),
      shipping_state: new FormControl('', [Validators.required]),
      shipping_city: new FormControl('', [
        Validators.required,
      ]),
    });
  }


  goto(event: any) {

    this.router.navigate(['/homepage']);

    type PostBody = {
      email: string
      password: string
    

      
    }

    const postbody: PostBody = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,

    };

    this._auth.login(postbody).subscribe((res: any) =>{

      const {token, user } = res.data;
      const userobject = JSON.stringify(postbody);
      this._session.savetoSessionstorage('token', token);
      this._session.savetoSessionstorage("user",userobject)

      this.loginForm.reset()
      alert('login successful') 
      this.router.navigate(['homepage/carts/checkout/shipping/payment']);

      console.log(res.data);
    })

    
  }
}
