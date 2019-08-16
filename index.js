const express = require("express");
const SC = require("./sc");

const app = express();

app.use(express.json());

SC.init("tNdzqSQH10kJuLrRhPLbf5wtQEnaXmi1");

app.get("*", (req, res) => {
  SC.get(req.url, req.body).then(data => res.json(data));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port 8080");
});
