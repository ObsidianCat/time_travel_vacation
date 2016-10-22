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
 * Created by Lula on 7/5/2016.
 */
const core_1 = require('@angular/core');
const destination_data_handler_service_1 = require("../services/destination-data-handler.service");
let ShowRandomComponent = class ShowRandomComponent {
    constructor(dataHandlerService) {
        this.dataHandlerService = dataHandlerService;
        this.randomDest = {};
    }
    ngOnInit() {
        this.randomDest = {};
        this.findRandomDestination();
    }
    findRandomDestination() {
        this.dataHandlerService.getRandomDestination()
            .then((data) => {
            this.randomDest = data;
            console.log(this.randomDest);
        })
            .catch((err) => {
            console.error(err);
        });
    }
};
ShowRandomComponent = __decorate([
    core_1.Component({
        selector: 'destination-random',
        templateUrl: 'vacation-chooser/templates/show-random.component.html',
        // directives:[DestPreviewComponent],
        styleUrls: ['vacation-chooser/styles/css/components/show-random.component.css'],
    }), 
    __metadata('design:paramtypes', [destination_data_handler_service_1.DestinationDataHandlerService])
], ShowRandomComponent);
exports.ShowRandomComponent = ShowRandomComponent;
//# sourceMappingURL=show-random.component.js.map