const SC = require(".");

SC.init({
  clientId: "tNdzqSQH10kJuLrRhPLbf5wtQEnaXmi1",
  host: "https://aqueous-lake-30663.herokuapp.com"
});

SC.get("search/tracks", { q: "Crytix" })
  .then(res => console.log(res))
  .catch(err => {
    console.log(err);
  });
