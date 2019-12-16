const SC = require(".");

SC.init({
  clientId: "RUQWGyj6q6sKdsel5JpFoJUvjHmSbPe5",
  cors: true
});

// SC.get("/search/tracks", {
//   q: "crytix",
//   limit: 45,
//   linked_partitioning: 1
// }).then((search) => {
//   console.log(search.collection[0].media);
// });

SC.stream("267552879").then((stream) => {
  console.log(stream);
});
