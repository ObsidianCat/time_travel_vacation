/**
 * Created by Lula on 7/4/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { ADVICE_URLS } from '../shared/constants.shared';

@Injectable()
export class DestinationDataHandlerService{
  constructor(private http:Http ){}

  private getData(data_url): Promise<any> {
    return this.http.get(data_url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private sendData(data_url, data): Promise<any> {
    return this.http.post(data_url, data)
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

  saveAdvice(dataModel){
    return this.sendData(ADVICE_URLS.BASE+"/"+dataModel.destId+"/"+dataModel.userId, dataModel.advice);
  }
}
