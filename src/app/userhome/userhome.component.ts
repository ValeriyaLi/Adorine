import { Component } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {
  logged: boolean = true;

  constructor(private userService: UserService) {
  }

  logout() {
    this.userService.logout()
  }
}
