import {Component, OnInit} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { NativeReferencesService } from '../services/native-references.service';
import { Auth } from '../services/auth.service';
import { USER_URLS } from '../shared/constants.shared';

@Component({
  selector:'user-profile',
  templateUrl:'vacation-chooser/templates/user-profile.component.html'
})

export class UserProfileComponent implements OnInit {
  users: any;

  constructor(private auth: Auth,
              private authHttp: AuthHttp
  ) {}

  ngOnInit() {
    this.authHttp.get('api/users/profile')
      .map(res => res.json())
      .subscribe(
        users => {
          this.users = users
          console.log(users)
        },
        error => console.log(error)
      );
  }
}
