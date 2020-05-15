import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, Subject, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorHandlerService implements HttpInterceptor {
    private errorSubject = new Subject<string[]>();
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((resp: HttpErrorResponse)=>{
                if(resp.error.errors) {
                    this.errorSubject.next([...Object.values(resp.error.errors)] as string[]);
                } else if (resp.error.title) {
                    this.errorSubject.next([resp.error.title]);
                } else {
                    this.errorSubject.next(["Http error occured"]);
                }
                return throwError(resp);
            })
        );
    }

    public get errors(): Observable<string[]> {
        return this.errorSubject;
    }
}