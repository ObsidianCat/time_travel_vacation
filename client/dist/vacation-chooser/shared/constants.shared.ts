/**
 * Created by Lula on 7/6/2016.
 */


const ART_TAGS = [
  "Roman", "Greek and Hellenistic","Baroque", "Renaissance"
];
const HISTORY_TAGS = [
  "Early Middle Ages","The Renaissance", "Ancient Rome", "Ancient Greece"
];

const TIME_RANGE = {
  START:-3000,
  END:2000
};
const DESTINATION_URLS = {
  BASE: "api/destinations",
  RANDOM: "api/destinations?random=true",
  FULL_DESCRIPTION:"api/destinations/fullDescription/",
  LIKE_IT:"api/destinations/like/",
  VOTE_FOR_TAG:"api/destinations/voteTag/"

};
const ADVICE_URLS = {
  BASE:"api/advices"
};

const BOOK_URLS = {
  BASE:"api/books"
};

export {
  ART_TAGS,
  HISTORY_TAGS,
  TIME_RANGE,
  DESTINATION_URLS,
  ADVICE_URLS,
  BOOK_URLS
};
