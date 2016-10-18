import { Injectable }      from '@angular/core';
import {AuthHttp} from 'angular2-jwt';


@Injectable()
export class UserDataHandlerService {

  appUserData: any;

  constructor(
    private authHttp: AuthHttp
    ) {

  }

  public findOrCreateAppUser(authUserId){
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

}
