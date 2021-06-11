import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
  loadingBar: any;

  constructor(
    private loadingBarService: LoadingBarService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let dupReq;

    this.loadingBar = this.loadingBarService.useRef();

    dupReq = req.clone({
      headers: req.headers
    });

    return next.handle(dupReq).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.status === 200) {
        }
      }

      return event;
    })).pipe(catchError((error: HttpErrorResponse) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
        }
      }

      return throwError(error);
    }));
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true
    }
  ]
})

export class Interceptor {}
