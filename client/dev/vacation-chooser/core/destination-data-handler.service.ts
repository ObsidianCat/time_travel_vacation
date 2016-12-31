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

  private sendData(data_url, data): Promise<any> {
    return this.http.post(data_url, data)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private updateData(data_url, data): Promise<any> {
    return this.http.patch(data_url, data)
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
  getRandomDestination(){
    return this.getData(DESTINATION_URLS.RANDOM);
  }
  getDestinationById(id){
    return this.getData(DESTINATION_URLS.FULL_DESCRIPTION+id);
  }
  getDestinationsByTags(dataModel){
    return this.getData(DESTINATION_URLS.BASE+"?"+dataModel.tagsType+"="+dataModel.selectedTags.join());
  }

  getDestinationsByPeriod(dataModel){
    let queryString ="?"+dataModel.start.name+"="+dataModel.start.date+"&"+dataModel.end.name+"="+dataModel.end.date;
    return this.getData(DESTINATION_URLS.BASE+queryString);
  }
  getAllDestinations(){
    return this.getData(DESTINATION_URLS.BASE);
  }
  likeDestination(destId){
    return this.updateData(DESTINATION_URLS.LIKE_IT+destId, {});
  }
  voteForTag(destId, tagData){
    return this.updateData(`${DESTINATION_URLS.VOTE_FOR_TAG}${destId}?tagId=${tagData.tagId}
    &voteType=${tagData.voteType}&tagType=${tagData.tagType}`, {});
  }

}
