const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Youtube!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});


app.post("/login", (req, res) => {
  res.status(200);
  res.send("you're logged in");
})


app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
