import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';
import { ProfileService } from 'src/app/shared/api/profile/profile.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-cpassword',
  templateUrl: './cpassword.component.html',
  styleUrls: ['./cpassword.component.css']
})
export class CpasswordComponent implements OnInit {


  pword: string |any;
  password: string | any;

  showPassword: boolean = false;
  SPassword: boolean = false;

  signForm: FormGroup | any;


  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _session: SessionService,
    private local: ProfileService,
    private _http: HttpClient,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }


  formInit() {
    this.signForm = this._fb.group({
      oldpassword: new FormControl('', [Validators.minLength(6),Validators.required]),
      newpassword: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
 
  }
  toggleNPasswordVisibility() {
    this.SPassword = !this.SPassword;
 
  }


  goto(event: any) {



    type PostBody = {
      oldpassword: string;
      newpassword: string;
    };

    const postbody: PostBody = {
      oldpassword: this.signForm.value.oldpassword,
      newpassword: this.signForm.value.newpassword,
    };


   

    // type UserData = {
    //   current_password: string
    //   new_password: string
    // }

    // const user: UserData ={
    //   current_password: postbody.current_password,
    //   new_password: postbody.new_password
    // };

    this.local.changepassword(postbody).subscribe((res: any) =>
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
        this.router.navigate(['/homepage'])
      
        
      },(err) =>{
        this.toast.error({
          detail: 'Opps',
          summary: 'User is registered already!!!',
          duration: 5000,
        });
        this.router.navigate(['Cpassword'])
      })

  }



}
