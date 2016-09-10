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
const core_1 = require('@angular/core');
const destination_data_handler_service_1 = require("../services/destination-data-handler.service");
const constants_shared_1 = require('../shared/constants.shared');
let PeriodFinderComponent = class PeriodFinderComponent {
    constructor(dataHandlerService) {
        this.dataHandlerService = dataHandlerService;
        this.active = true;
        this.submitted = false;
        this.gotSearchResults = new core_1.EventEmitter();
        this.model = {
            start: {
                name: "periodStart",
                date: constants_shared_1.TIME_RANGE.START
            },
            end: {
                name: "periodEnd",
                date: constants_shared_1.TIME_RANGE.END
            }
        };
    }
    onSubmit() {
        this.submitted = true;
        this.dataHandlerService.getDestinationsByPeriod(this.model)
            .then((data) => {
            console.log(data);
            this.gotSearchResults.emit(data);
        })
            .catch((err) => {
            console.error(err);
        });
    }
    get diagnostic() { return JSON.stringify(this.model); }
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], PeriodFinderComponent.prototype, "gotSearchResults", void 0);
PeriodFinderComponent = __decorate([
    core_1.Component({
        templateUrl: 'vacation-chooser/templates/period-finder.component.html',
        selector: 'period-finder'
    }), 
    __metadata('design:paramtypes', [destination_data_handler_service_1.DestinationDataHandlerService])
], PeriodFinderComponent);
exports.PeriodFinderComponent = PeriodFinderComponent;
