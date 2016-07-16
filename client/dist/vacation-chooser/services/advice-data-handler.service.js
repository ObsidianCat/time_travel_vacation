"use strict";var __decorate=this&&this.__decorate||function(t,e,r,a){var o,n=arguments.length,c=3>n?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(3>n?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},__metadata=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/Rx"),require("rxjs/add/operator/toPromise");var constants_shared_1=require("../shared/constants.shared"),AdviceDataHandlerService=function(){function t(t){this.http=t}return t.prototype.getData=function(t){return this.http.get(t).toPromise().then(this.extractData)["catch"](this.handleError)},t.prototype.sendData=function(t,e){return this.http.post(t,e).toPromise().then(this.extractData)["catch"](this.handleError)},t.prototype.extractData=function(t){var e=t.json();return e||{}},t.prototype.handleError=function(t){var e=t.message?t.message:t.status?t.status+" - "+t.statusText:"Server error";return console.error(e),Promise.reject(e)},t.prototype.sayHello=function(){return"Hello"},t.prototype.saveAdvice=function(t,e,r){return this.sendData(constants_shared_1.ADVICE_URLS.BASE+"/"+e+"/"+r,t)},t=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],t)}();exports.AdviceDataHandlerService=AdviceDataHandlerService;