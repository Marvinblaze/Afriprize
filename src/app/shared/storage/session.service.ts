import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }


  savetoSessionstorage(name:string, val: any){
    sessionStorage.setItem(name,val);
  }

  readtoSessionstorage(name:string){
    sessionStorage.getItem(name);
  }

  removestorage(name:string){
    sessionStorage.removeItem(name);
  }

  clearstorage(){
    sessionStorage.clear();
  }

}
