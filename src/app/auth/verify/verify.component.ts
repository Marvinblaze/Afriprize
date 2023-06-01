import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';
import { SessionService } from 'src/app/shared/storage/session.service';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {


  
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

        console.log(res)
        this.verifyForm.reset();
        this.toast.success({
          detail: 'You have been Verified',
          summary: 'User is Verified!!!',
          duration: 5000,
        });
        this.router.navigate(['verify/congratulations']);
      },
      (err) =>{
        this.toast.error({
          detail: 'Opps',
          summary: 'User has already been verified!!!',
          duration: 5000,
        });
        this.router.navigate(['verify'])
      })
    
  }





  // click(event: any) {



   


 

  //   const userobject = JSON.parse(sessionStorage.getItem('user')!)
  //   const contactobject = JSON.parse(sessionStorage.getItem('contact')!)
  //   console.log({userobject,contactobject, passwordobject})

  //   type UserData = {
  //     firstname: string,
  //     lastname: string
  //     email: string
  //     phone: string
  //     country: string
  //     password: string
  //   }

  //   const user: UserData ={
  //     firstname: userobject.firstname,
  //     lastname: userobject.lastname,
  //     email: contactobject.email,
  //     phone: contactobject.phone,
  //     country: 'Nigeria',
  //     password: postbody.password
  //   }


  //   // this._session.savetoSessionstorage({...postbody});
  //   ;
  //   // this.signForm.reset();
  

  //   this.local.signin(user).subscribe((res =>
  //     {
  //       // const userobject = JSON.stringify(postbody);
  //       // this._session.savetoSessionstorage('user', userobject);
  //       console.log(res)
  //       this.signForm.reset();
  //       this.router.navigate(['verify'])
      
        
  //     }))

  // }
}
