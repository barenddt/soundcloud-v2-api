const SC = require(".");

SC.init({
  clientId: "tNdzqSQH10kJuLrRhPLbf5wtQEnaXmi1",
  cors: true
});

SC.get("/search/tracks", { q: "Crytix" })
  .then(res => console.log(res))
  .catch(err => {
    console.log(err);
  });

// SC.stream("/tracks/93532103/streams").then(stream => {
//   console.log(stream);
// });
