"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Lula on 7/4/2016.
 */
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
const angular2_jwt_1 = require('angular2-jwt');
const constants_shared_1 = require('../shared/constants.shared');
let BookDataHandlerService = class BookDataHandlerService {
    constructor(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }
    getData(data_url) {
        return this.http.get(data_url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    sendData(data_url, data) {
        return this.http.post(data_url, data)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    extractData(res) {
        let body = res.json();
        return body || {};
    }
    handleError(error) {
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
    saveBook(dataModel, destId, userId) {
        return this.sendData(constants_shared_1.BOOK_URLS.BASE + "/" + destId + "/" + userId, dataModel);
    }
};
BookDataHandlerService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
], BookDataHandlerService);
exports.BookDataHandlerService = BookDataHandlerService;
