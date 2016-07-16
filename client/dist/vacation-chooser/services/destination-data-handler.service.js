"use strict";var __decorate=this&&this.__decorate||function(t,e,a,r){var n,o=arguments.length,s=3>o?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,r);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(s=(3>o?n(s):o>3?n(e,a,s):n(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s},__metadata=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/Rx"),require("rxjs/add/operator/toPromise");var constants_shared_1=require("../shared/constants.shared"),DestinationDataHandlerService=function(){function t(t){this.http=t}return t.prototype.getData=function(t){return this.http.get(t).toPromise().then(this.extractData)["catch"](this.handleError)},t.prototype.sendData=function(t,e){return this.http.post(t,e).toPromise().then(this.extractData)["catch"](this.handleError)},t.prototype.updateData=function(t,e){return this.http.patch(t,e).toPromise().then(this.extractData)["catch"](this.handleError)},t.prototype.extractData=function(t){var e=t.json();return e||{}},t.prototype.handleError=function(t){var e=t.message?t.message:t.status?t.status+" - "+t.statusText:"Server error";return console.error(e),Promise.reject(e)},t.prototype.getRandomDestination=function(){return this.getData(constants_shared_1.DESTINATION_URLS.RANDOM)},t.prototype.getDestinationById=function(t){return this.getData(constants_shared_1.DESTINATION_URLS.FULL_DESCRIPTION+t)},t.prototype.getDestinationsByTags=function(t){return this.getData(constants_shared_1.DESTINATION_URLS.BASE+"?"+t.tagsType+"="+t.selectedTags.join())},t.prototype.getDestinationsByPeriod=function(t){var e="?"+t.start.name+"="+t.start.date+"&"+t.end.name+"="+t.end.date;return this.getData(constants_shared_1.DESTINATION_URLS.BASE+e)},t.prototype.getAllDestinations=function(){return this.getData(constants_shared_1.DESTINATION_URLS.BASE)},t.prototype.likeDestination=function(t){return this.updateData(constants_shared_1.DESTINATION_URLS.LIKE_IT+t,{})},t.prototype.voteForTag=function(t,e){return this.updateData(""+constants_shared_1.DESTINATION_URLS.VOTE_FOR_TAG+t+"?tagId="+e.tagId+"\n    &voteType="+e.voteType+"&tagType="+e.tagType,{})},t=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],t)}();exports.DestinationDataHandlerService=DestinationDataHandlerService;