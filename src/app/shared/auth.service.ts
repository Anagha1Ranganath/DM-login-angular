import { Injectable } from "@angular/core";
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
{
    export class AuthService {
        private _loginUrl = 'http://localhost:8808/api/deliveryManager';

        constructor(private http: HttpClient) { }

        loginUser(user) {
            return this.http.post<any>(this._loginUrl, user)
        }
    }
}