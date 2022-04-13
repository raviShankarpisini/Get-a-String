const express = require("express");
app = express();

const requestMessage = app.get("/", (request, response) => {
  response.send("Express JS");
});

// app.listen(3000);
module.exports = requestMessage;
