/**
 * Created by Lula on 7/6/2016.
 */
"use strict";
const ART_TAGS = [
    "Roman", "Greek and Hellenistic", "Baroque", "Renaissance"
];
exports.ART_TAGS = ART_TAGS;
const HISTORY_TAGS = [
    "Early Middle Ages", "The Renaissance", "Ancient Rome", "Ancient Greece"
];
exports.HISTORY_TAGS = HISTORY_TAGS;
const TIME_RANGE = {
    START: -3000,
    END: 2000
};
exports.TIME_RANGE = TIME_RANGE;
const DESTINATION_URLS = {
    BASE: "api/destinations",
    RANDOM: "api/destinations?random=true",
    FULL_DESCRIPTION: "api/destinations/fullDescription/",
    LIKE_IT: "api/destinations/like/",
    VOTE_FOR_TAG: "api/destinations/voteTag/"
};
exports.DESTINATION_URLS = DESTINATION_URLS;
const ADVICE_URLS = {
    BASE: "api/advices"
};
exports.ADVICE_URLS = ADVICE_URLS;
const BOOK_URLS = {
    BASE: "api/books"
};
exports.BOOK_URLS = BOOK_URLS;
const USER_URLS = {
    BASE: "api/users"
};
exports.USER_URLS = USER_URLS;
