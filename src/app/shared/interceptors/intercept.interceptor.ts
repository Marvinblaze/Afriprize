import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../api/loader/loader.service';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {
private totalRequests = 0;

  constructor(private loadingService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const api_key = sessionStorage.getItem('token');


    if (api_key){
      return next.handle(request.clone({
        setHeaders:{
          Authorization:`Bearer ${api_key}`
        },
      }));
    }
    this.totalRequests++;
    this.loadingService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0){
          this.loadingService.setLoading(false);
        }
      })
    );;
  }
}
