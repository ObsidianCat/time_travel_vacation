"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,i=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(3>a?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},core_1=require("@angular/core"),router_1=require("@angular/router"),router_2=require("@angular/router"),DestPreviewComponent=function(){function e(e){this.router=e}return e.prototype.goToDestView=function(e){var t=["/destination",e];this.router.navigate(t)},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"destination",void 0),e=__decorate([core_1.Component({selector:"destination-preview",styleUrls:["vacation-chooser/styles/dest-preview.component.css"],templateUrl:"vacation-chooser/templates/dest-preview.component.html",directives:[router_2.ROUTER_DIRECTIVES]}),__metadata("design:paramtypes",[router_1.Router])],e)}();exports.DestPreviewComponent=DestPreviewComponent;