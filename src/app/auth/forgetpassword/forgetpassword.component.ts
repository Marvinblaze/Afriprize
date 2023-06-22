import { Component,  OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  
  logo1 = "../../assets/images/1 13.svg";


  email: string | any;

forgetForm: FormGroup | any;


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
    this.forgetForm = this._fb.group({
      email: new FormControl('', [Validators.required]),
    });
  }


  goto() {


    type PostBody = {
      email: string

    };

    const postbody: PostBody = {
      email: this.forgetForm.value.code,
    };


    const codedobject = (postbody);

    // const contactobject = JSON.parse(sessionStorage.getItem('contact')!)
    // console.log({contactobject, codedobject})

    type verifyData = {
      email: string
      // code: string
    }

    const verify: verifyData ={
      // email: contactobject.email,
      email: postbody.email
    }
  

    this.local.resetpassword(this.email).subscribe((res: any) =>
      {
        // const {token } = res;
        // this._session.savetoSessionstorage('token', token);
        // console.log(res)
        this.forgetForm.reset();
        this.toast.success({
          detail: 'You have been Verified',
          summary: 'Check your email for the verification code!!!',
          duration: 5000,
        });
        this.router.navigate(['forgetpassword/forgetverification']);
      },
      (err) =>{
        this.toast.error({
          detail: 'Opps',
          summary: 'Email or phone number is not associated with our system!!!',
          duration: 5000,
        });
        this.router.navigate(['forgetpassword'])
      });
    
  }





  // click(event: any) {



   


 


}


