import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/storage/session.service';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  logo1 = "../../assets/images/1 13.svg";


  signForm: FormGroup | any;


  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _session: SessionService,
    private local: AuthenticateService,
    private _http: HttpClient,

  ) {}

  ngOnInit(): void {
    this.formInit();
  }


  formInit() {
    this.signForm = this._fb.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [
        Validators.required,
      ]),
    });
  }


  goto(event: any) {


    type PostBody = {
      firstname: string;
      lastname: string;
    };

    const postbody: PostBody = {
      firstname: this.signForm.value.firstname,
      lastname: this.signForm.value.lastname,
    };


    const userobject = JSON.stringify(postbody);
    sessionStorage.setItem('user', userobject)
    // this._session.savetoSessionstorage({...postbody});
    this.signForm.reset();

    this.router.navigate(['register/contact']);

    // this.local.signin(postbody).subscribe((res =>
    //   {
    //     const userobject = JSON.stringify(postbody);
    //     this._session.savetoSessionstorage('user', userobject);
    //     this.signForm.reset();
    //     this.router.navigate(['register/contact']);

    //     console.log(this.local.signin(postbody).subscribe((res =>
    //       {
    //         const userobject = JSON.stringify(postbody);
    //         this._session.savetoSessionstorage('user', userobject);
    //         this.signForm.reset();
    //         this.router.navigate(['register/contact']);})))
        
    //   }))


  }

}
