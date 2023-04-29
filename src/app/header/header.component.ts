import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthorized: boolean = false;
  user_id: number = 0;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    console.log(this.isAuthorized)
    this.isAuthorized = this.userService.isAuthorized;
    this.user_id = this.userService.user_id;
    this.userService.authChanged.subscribe((isAuthorized: boolean) => {
      this.isAuthorized = isAuthorized;
    });
  }

}
