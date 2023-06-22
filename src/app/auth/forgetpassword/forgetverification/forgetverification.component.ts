import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-forgetverification',
  templateUrl: './forgetverification.component.html',
  styleUrls: ['./forgetverification.component.css']
})
export class ForgetverificationComponent implements OnInit {

  
  logo1 = "../../assets/images/1 13.svg";


verifyForm: FormGroup | any;


  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _session: SessionService,
    private local: AuthenticateService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }


  formInit() {
    this.verifyForm = this._fb.group({
      code: new FormControl('', [Validators.required]),
    });
  }


  goto(event: any) {


    type PostBody = {
      code: string

    };

    const postbody: PostBody = {
      code: this.verifyForm.value.code,
    };


    const codedobject = (postbody);

    const contactobject = JSON.parse(sessionStorage.getItem('contact')!)
    console.log({contactobject, codedobject})

    type verifyData = {
      email: string
      code: string
    }

    const verify: verifyData ={
      email: contactobject.email,
      code: postbody.code
    }
  

    this.local.verify(verify).subscribe((res: any) =>
      {
        const {token } = res;
        this._session.savetoSessionstorage('token', token);
        console.log(res)
        this.verifyForm.reset();
        this.toast.success({
          detail: 'You have been Verified',
          summary: 'User code is Verified!!!',
          duration: 5000,
        });
        this.router.navigate(['forgetpassword/newpassword']);
      },
      (err) =>{
        this.toast.error({
          detail: 'Opps',
          summary: 'User code has expired!!!',
          duration: 5000,
        });
        this.router.navigate(['forgetverification'])
      })
    
  }





}



