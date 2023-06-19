import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/storage/session.service';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  logo1 = "../../assets/images/1 13.svg";


  signForm: FormGroup | any;


  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _session: SessionService,
    private local: AuthenticateService,
    private _http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formInit();

    this.signForm.setValue({email: sessionStorage.getItem('email'), phone: sessionStorage.getItem('phone')})
  }


  formInit() {
    this.signForm = this._fb.group({
      email: new FormControl('', [ Validators.email,Validators.required]),
      phone: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  goto(event: any) {

    type PostBody = {
      email: string;
      phone: string;
    };

    const postbody: PostBody = {
      email: this.signForm.value.email,
      phone: this.signForm.value.phone,
    };

    sessionStorage.removeItem('email')
    sessionStorage.removeItem('phone')


    sessionStorage.setItem('email', this.signForm.value.email || '')
    sessionStorage.setItem('phone', this.signForm.value.phone || '')


    const object = this._session.readtoSessionstorage('user');
    const contactobject = JSON.stringify(postbody);
    this._session.savetoSessionstorage('contact', contactobject);
    // this.signForm.reset();
    

    this.local.signin(postbody).subscribe((res =>
      {
        const userobject = JSON.stringify(postbody);
        this._session.savetoSessionstorage('user', userobject);
        this.signForm.reset();
        // this.router.navigate(['register/contact']);        
      }))
    this.router.navigate(['register/password']);
  }

  back(event: any) {
    this.router.navigate(['register']);
  }
}
