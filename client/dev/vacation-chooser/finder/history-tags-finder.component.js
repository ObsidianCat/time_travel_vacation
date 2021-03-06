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
const core_1 = require("@angular/core");
const constants_shared_1 = require("../shared/constants.shared");
const destination_data_handler_service_1 = require("../core/destination-data-handler.service");
let HistoryTagsFinderComponent = class HistoryTagsFinderComponent {
    constructor(dataHandlerService) {
        this.dataHandlerService = dataHandlerService;
        this.active = true;
        this.submitted = false;
        this.gotSearchResults = new core_1.EventEmitter();
        this.model = {
            tagsType: "historyTags"
        };
        var tagsList = (function (tags) {
            var tagsCollection = [];
            for (let tag of tags) {
                tagsCollection.push({
                    "name": tag,
                    "isChecked": false
                });
            } //end of for of
            return tagsCollection;
        })(constants_shared_1.HISTORY_TAGS);
        this.model["tags"] = tagsList;
    }
    onSubmit() {
        this.submitted = true;
        let selectedTags = this.model["tags"].filter(this.isSelected);
        this.model["selectedTags"] = (function () {
            let tagsNames = [];
            for (let tag of selectedTags) {
                tagsNames.push(tag.name);
            }
            return tagsNames;
        })();
        // console.log(this.model);
        this.dataHandlerService.getDestinationsByTags(this.model)
            .then((data) => {
            console.log(data);
            this.gotSearchResults.emit(data);
        })
            .catch((err) => {
            console.error(err);
        });
    }
    isSelected(value) {
        return value.isChecked;
    }
    get diagnostic() { return JSON.stringify(this.model); }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HistoryTagsFinderComponent.prototype, "gotSearchResults", void 0);
HistoryTagsFinderComponent = __decorate([
    core_1.Component({
        templateUrl: 'vacation-chooser/finder/tags-finder.component.html',
        selector: 'history-tags-finder',
    }),
    __metadata("design:paramtypes", [destination_data_handler_service_1.DestinationDataHandlerService])
], HistoryTagsFinderComponent);
exports.HistoryTagsFinderComponent = HistoryTagsFinderComponent;
//# sourceMappingURL=history-tags-finder.component.js.map