import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


// change request and forward the modified request!
export class AuthInterceptorsService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({headers:req.headers.append('Auth','kkkk')})
    req.headers.append("Auth-Header",'srf15h-df-d88fd-dfdsf')
    return next.handle(modifiedRequest)
  }

}
