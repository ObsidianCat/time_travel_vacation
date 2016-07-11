/**
 * Created by Lula on 7/6/2016.
 */
/**
 * Created by Lula on 7/4/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { DESTINATION_URLS } from '../shared/constants.shared';

@Injectable()
export class DestinationDataHandlerService{
  constructor(private http:Http ){}

  private getData(data_url): Promise<any> {
    return this.http.get(data_url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getRandomDestination(){
    return this.getData(DESTINATION_URLS.RANDOM);
  }
  getDestinationById(id){
    return this.getData(DESTINATION_URLS.FULL_DESCRIPTION+id);
  }
  getDestinationsByTags(dataModel){
    return this.getData(DESTINATION_URLS.ALL+"?"+dataModel.tagsType+"="+dataModel.selectedTags.join());
  }

  getDestinationsByPeriod(dataModel){
    let queryString ="?"+dataModel.start.name+"="+dataModel.start.date+"&"+dataModel.end.name+"="+dataModel.end.date;
    return this.getData(DESTINATION_URLS.ALL+queryString);
  }
  getAllDestinations(){
    return this.getData(DESTINATION_URLS.ALL);
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

}
