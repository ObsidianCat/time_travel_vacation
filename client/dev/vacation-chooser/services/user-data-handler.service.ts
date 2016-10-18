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

  // private getData(data_url): Promise<any> {
  //   return this.http.get(data_url)
  //     .toPromise()
  //     .then(this.extractData)
  //     .catch(this.handleError);
  // }

  public getAppUserData(){
    let userAppId = localStorage.getItem('appUserId');
    return this.authHttp.get(`api/users/${userAppId}`);
      // .subscribe(
      //   (responseData) => {
      //     console.log(responseData.json());
      //     return responseData.json();
      //   },
      //   error => console.error(error),
      //   () => console.log('Request Complete')
      // );
  }
}
