/**
 * Created by Lula on 7/7/2016.
 */
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
const router_1 = require('@angular/router');
const destination_data_handler_service_1 = require("../services/destination-data-handler.service");
const destination_1 = require("../models/destination");
let DestViewComponent = class DestViewComponent {
    constructor(dataHandlerService, route) {
        this.dataHandlerService = dataHandlerService;
        this.route = route;
        this.destination = new destination_1.DestinationModel("", "", [], [], [], []);
        this.isBookFormVisible = false;
        this.isAdviceFormVisible = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.dataHandlerService.getDestinationById(id)
                .then(destination => {
                Object.assign(this.destination, destination);
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    newAdviceAdded(advice) {
        this.destination.advices.push(advice.data);
    }
    newBookAdded(book) {
        this.destination.books.push(book.data);
        this.isBookFormVisible = false;
        console.log(this.destination);
    }
    likeDestination(btnRef) {
        btnRef.disabled = true;
        this.dataHandlerService.likeDestination(this.destination._id)
            .then((data) => {
            this.destination.likes = data;
        })
            .catch((err) => {
            console.error(err);
        });
    }
    tagVote(voteType, tagType, tag, name) {
        if (tag.alreadyVoted) {
            return;
        }
        console.log(this.destination._id, voteType, tagType, tag._id);
        this.dataHandlerService.voteForTag(this.destination._id, { tagId: tag._id, tagType, voteType })
            .then((data) => {
            // let index = this.destination[tagType].indexOf(tag);
            // this.destination[tagType][index].votes++;
            voteType == "up" ? tag.votes++ : tag.votes--;
            tag.alreadyVoted = true;
        })
            .catch((err) => {
            console.error(err);
        });
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], DestViewComponent.prototype, "destination", void 0);
DestViewComponent = __decorate([
    core_1.Component({
        selector: 'destination-view',
        templateUrl: 'vacation-chooser/templates/dest-view.component.html',
        styleUrls: ['vacation-chooser/styles/css/components/dest-view.component.css'],
    }), 
    __metadata('design:paramtypes', [destination_data_handler_service_1.DestinationDataHandlerService, router_1.ActivatedRoute])
], DestViewComponent);
exports.DestViewComponent = DestViewComponent;
//# sourceMappingURL=dest-view.component.js.map