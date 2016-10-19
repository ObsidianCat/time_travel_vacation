/**
 * Created by Lula on 7/4/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {AuthHttp} from 'angular2-jwt';
import { ADVICE_URLS } from '../shared/constants.shared';

@Injectable()
export class AdviceDataHandlerService{
  constructor(private http:Http,
              private authHttp: AuthHttp,
  ){}

  private getData(data_url): Promise<any> {
    return this.http.get(data_url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private sendData(data_url, data): Promise<any> {
    return this.authHttp.post(data_url, data)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError(error: any){
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  saveAdvice(dataModel, destId, userId){
    return this.sendData(ADVICE_URLS.BASE+"/"+destId+"/"+userId, dataModel);
  }
}
