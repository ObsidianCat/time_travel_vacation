"use strict";
/**
 * Created by Lula on 7/8/2016.
 */
class DestinationModel {
    constructor(placeName, countryName, historyTags, artTags, books, advices, _id, likes) {
        this.placeName = placeName;
        this.countryName = countryName;
        this.historyTags = historyTags;
        this.artTags = artTags;
        this.books = books;
        this.advices = advices;
        this._id = _id;
        this.likes = likes;
    }
}
exports.DestinationModel = DestinationModel;
