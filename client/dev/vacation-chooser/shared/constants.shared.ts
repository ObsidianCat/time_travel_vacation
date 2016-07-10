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
  ALL_DESTINATIONS: "api/destinations",
  RANDOM_DESTINATION: "/api/destinations?random=true",
};

export {ART_TAGS, HISTORY_TAGS, TIME_RANGE, DESTINATION_URLS};
