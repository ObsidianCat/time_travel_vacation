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
 * Created by Lula on 7/7/2016.
 */
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let DestPreviewComponent = class DestPreviewComponent {
    constructor(router) {
        this.router = router;
    }
    goToDestView(id) {
        let link = ['/destination', id];
        this.router.navigate(link);
    }
};
__decorate([
    core_1.Input('cur-destination'),
    __metadata("design:type", Object)
], DestPreviewComponent.prototype, "destination", void 0);
DestPreviewComponent = __decorate([
    core_1.Component({
        selector: 'destination-preview' + Math.random(),
        styleUrls: ['vacation-chooser/styles/css/components/dest-preview.component.css'],
        templateUrl: 'vacation-chooser/shared/dest-preview.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DestPreviewComponent);
exports.DestPreviewComponent = DestPreviewComponent;
//# sourceMappingURL=dest-preview.component.js.map