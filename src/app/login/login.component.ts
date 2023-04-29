import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {AuthToken} from "../models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logged: boolean = false;
  username: string = '';
  password: string = '';
  loginError: boolean = false

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login() {
    this.userService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.username = '';
      this.password = '';
      this.router.navigate(['/user-home']);
    },
      (error) => {
        this.loginError = true;
      }
    );
    console.log(this.userService.user_id)
    console.log( localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
    this.logged = false;
  }

}
