const SC = require(".");

SC.init({
  clientId: "tNdzqSQH10kJuLrRhPLbf5wtQEnaXmi1",
  cors: true
});

SC.get("/tracks/668277719/comments", {
  limit: 20,
  threaded: 1,
  filter_replies: 0
})
  .then(res => console.log(res))
  .catch(err => {
    console.log(err);
  });

// SC.stream("/tracks/93532103/streams").then(stream => {
//   console.log(stream);
// });
