import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErorrInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMessage = `Error: ${error.error.message}`;
          console.log(errorMessage);
        }
        else {
          console.log('this is server side error');
          errorMessage = `Error Code: ${error.status},  Message: ${error.message}`;
          console.log(error.error.errors.email)
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
