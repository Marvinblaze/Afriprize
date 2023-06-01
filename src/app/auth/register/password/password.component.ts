import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {


  logo1 = "../../assets/images/1 13.svg";


  signForm: FormGroup | any;


  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _session: SessionService,
    private local: AuthenticateService,
    private _http: HttpClient,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }


  formInit() {
    this.signForm = this._fb.group({
      password: new FormControl('', [Validators.minLength(6),Validators.required]),
      password_confirmation: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }


  goto(event: any) {



    type PostBody = {
      password: string;
      password_confirmation: string;
    };

    const postbody: PostBody = {
      password: this.signForm.value.password,
      password_confirmation: this.signForm.value.password_confirmation,
    };


    const passwordobject = (postbody);

    const userobject = JSON.parse(sessionStorage.getItem('user')!)
    const contactobject = JSON.parse(sessionStorage.getItem('contact')!)
    console.log({userobject,contactobject, passwordobject})

    type UserData = {
      firstname: string,
      lastname: string
      email: string
      phone: string
      country: string
      password: string
    }

    const user: UserData ={
      firstname: userobject.firstname,
      lastname: userobject.lastname,
      email: contactobject.email,
      phone: contactobject.phone,
      country: 'Nigeria',
      password: postbody.password
    }


    // this._session.savetoSessionstorage({...postbody});
    ;
    // this.signForm.reset();
  

    this.local.signin(user).subscribe((res: any) =>
      {
        // const userobject = JSON.stringify(postbody);
        // this._session.savetoSessionstorage('user', userobject);
        console.log(res)
        this.signForm.reset();
        this.toast.success({
          detail: 'You did it',
          summary: 'Registration is successful!!!',
          duration: 5000,
        });
        this.router.navigate(['verify'])
      
        
      },(err) =>{
        this.toast.error({
          detail: 'Opps',
          summary: 'User is registered already!!!',
          duration: 5000,
        });
        this.router.navigate(['password'])
      })

  }

  back(event: any) {
    this.router.navigate(['register/contact']);
  }

}
