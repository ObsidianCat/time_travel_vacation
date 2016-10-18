import {Injectable, Inject}      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from '../auth.config';
import {AuthHttp} from 'angular2-jwt';
// import { UserDataHandlerService }  from 'user-data-handler.service';
// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
  //Store profile object in auth class
  userProfile: any;
  appUserData: any;

  constructor(
    private authHttp: AuthHttp,
    // @Inject (UserDataHandlerService) private userDataHandlerService:UserDataHandlerService
    ) {
    // Set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        this.findOrCreateAppUser(this.userProfile.user_id);
        // userDataHandlerService.findOrCreateAppUser(this.userProfile.user_id);
      });

    });
  }

  private findOrCreateAppUser(authUserId){
    this.authHttp.post(`api/users/`, {authUserId})
      .subscribe(
        (responseData) => {
          this.appUserData = responseData.json();
          localStorage.setItem('appUserId', this.appUserData._id);
        },
        error => console.error(error),
        () => console.log('Request Complete')
      );
  }
  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };
}
