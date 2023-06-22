import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoints } from '../endpoint';


interface VerificationResponse {
  status: string,
  message: string,
  data: {
    accountName: string,
    accountNumber: string,
    bankCode: string,
    bankName: string
  }
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;


  

  constructor( private http: HttpClient) { }

  getrecommend(productId: string): Observable<any>{

    const params = {
      productId: productId
    };
    
  
    
    return this.http.get<any>(`${environment.url}${endpoints.recommend}`,{params});
 
  };


  getlist(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.list}`);
  };
  // get single product details

  listsingle(id:string): Observable<any>{
  
    return this.http.get<any[]>(`${environment.url}${endpoints.listsingle}${id}`);
  }







  saveOrder(products: any[]): Observable<any> {
    const requestBody = { products };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${environment.url}${endpoints.saveorder}`, requestBody, { headers });
  }


  userwallet(amount: number){
    const body = { amount };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(`${environment.url}${endpoints.fundwallet}`,body, {headers})
  }

  
  
  banks(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.banks}`)
  }
  
  createAccount(body: any): Observable<any> {
    
    return this.http.post<any>(`${environment.url}${endpoints.createaccount}`,body).pipe(
      catchError(this.handleError)
    );
  }


  verifyAccount(body: any): Observable<any> {
    
    return this.http.post<any>(`${environment.url}${endpoints.verifyaccount}`,body).pipe(
      catchError(this.handleError)
    );
  }

  listtransaction(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.transactions}`);
  }


  Selling(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.fastselling}`);

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };






  

}
