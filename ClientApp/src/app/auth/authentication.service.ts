import { Injectable } from "@angular/core";
import { Repository } from "../models/repository";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
    constructor(private repo: Repository, private router: Router) {}

    public authenticated: boolean = false;
    public name: string;
    public password: string;
    public callbackUrl: string;

    public login(): Observable<boolean> {
        this.authenticated = false;
        return this.repo.login(this.name, this.password).pipe(
            map(response => {
                if(response) {
                    this.authenticated = true;
                    this.password = null;
                    this.router.navigateByUrl("/admin/overview");
                }
                return this.authenticated;
            }),
            catchError(e => {
                this.authenticated = false;
                return of(this.authenticated);
            })
        );
    }
    public logout() {
        this.authenticated = false;
        this.repo.logout();
        this.router.navigateByUrl("/admin/login");
    }
}