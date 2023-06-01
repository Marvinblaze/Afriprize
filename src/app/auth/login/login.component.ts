import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/storage/session.service';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  password: string | any;

  showPassword: boolean = false;


  logo1 = "../../assets/images/1 13.svg";


  loginForm: FormGroup | any;


  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _auth: AuthenticateService,
    private _session: SessionService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }


  formInit() {
    this.loginForm = this._fb.group({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
 
  }

  goto(event: any) {

    // this.router.navigate(['/homepage']);

    type PostBody = {
      email: string
      password: string
    

      
    }

    const postbody: PostBody = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,

    };

    this._auth.login(postbody).subscribe((res: any) =>{

      const {token } = res;
      this._session.savetoSessionstorage('token', token);

      this.loginForm.reset()
      this.toast.success({
        detail: 'Nice memory',
        summary: res.message,
        duration: 5000,
      });
      this.router.navigate(['homepage']);
      
      console.log(res.data);
    }, (err) =>{
      this.toast.error({
        detail: 'Opps',
        summary: 'Invalid Login Credential!!!',
        duration: 5000,
      });
      this.router.navigate(['']);
    })

    
  }
}
