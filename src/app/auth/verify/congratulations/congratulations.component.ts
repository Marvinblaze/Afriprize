import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticateService } from 'src/app/shared/api/authentication/authenticate.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {
  


  logo1 = "../../../../assets/images/1 13.svg";

  constructor(
    private router: Router,
    private _auth: AuthenticateService,
    private _session: SessionService,
    private toast: NgToastService
   
  ) {}


ngOnInit(): void {
  console.log(this.goto(event))
    
  }

  goto(event: any) {

    this._session.readtoSessionstorage('token');
  //   this._auth.subscribe((res: any) =>{

  //     const {token } = res;

  
  //     this.toast.success({
  //       detail: 'Nice memory',
  //       summary: res.message,
  //       duration: 5000,
  //     });
  //     this.router.navigate(['homepage']);
      
  //     console.log(res.data);
  //   }, (err) =>{
  //     this.toast.error({
  //       detail: 'Opps',
  //       summary: 'Invalid Login Credential!!!',
  //       duration: 5000,
  //     });
  //     this.router.navigate(['']);
      
  //   })

    
  // }

    this.router.navigate(['homepage']);
  }
}

