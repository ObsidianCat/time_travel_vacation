import {Component, OnInit} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { NativeReferencesService } from '../core/native-references.service';
import { Auth } from '../core/auth.service';
import { UserDataHandlerService } from '../core/user-data-handler.service';

@Component({
  selector:'user-profile',
  templateUrl:'vacation-chooser/user-profile/user-profile.component.html'
})

export class UserProfileComponent implements OnInit {
  appUserData = {};

  constructor(private auth: Auth,
              private userDataHandlerService:UserDataHandlerService,
              private authHttp: AuthHttp
  ) {}

  ngOnInit() {
    // this.authHttp.get('api/users/profile')
    //   .map(res => res.json())
    //   .subscribe(
    //     (users) => {
    //       this.users = users;
    //       console.log(users)
    //     },
    //     error => console.log(error)
    //   );
    this.userDataHandlerService.getAppUserData().subscribe(
      (data) => {
        this.appUserData = data.json();
        console.log(data);

      }, //Bind to view
      (err) => {
            // Log errors if any
            console.log(err);
          }
      );
  }
}
