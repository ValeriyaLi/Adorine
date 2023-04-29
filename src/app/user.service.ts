import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AuthToken, Category, User} from "./models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://127.0.0.1:8000'
  authChanged = new EventEmitter<boolean>();
  isAuthorized = false;
  user_id!: number;

  constructor(private client: HttpClient) { }

  createUser(username: string, password: string, email: string): Observable<User> {
    return this.client.post<User>(
      `${this.BASE_URL}/users/`,
      {username, password, email}
    )
  }


  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/users/token/`,
      {username, password}
    )
      .pipe(
      tap((response: AuthToken) => {
        this.isAuthorized = true;
        this.user_id = response.user_id; // Assign user_id to the property
        this.authChanged.emit(this.isAuthorized);
      })
    );
  }

  getCartProducts() {
    return this.client.get(`${this.BASE_URL}/users/cart_products/`)
  }

  // login(username: string, password: string): Observable<AuthToken> {
  //   return this.client.post<AuthToken>(
  //     `${this.BASE_URL}/users/token/`,
  //     {username, password}
  //   ).pipe(
  //     tap(() => {
  //       this.isAuthorized = true;
  //       this.authChanged.emit(this.isAuthorized);
  //       this.user_id = .response.user_id;
  //     })
  //   );
  // }

  logout() {
      this.isAuthorized = false;
      this.authChanged.emit(this.isAuthorized);
      localStorage.removeItem('token');
  }

}
