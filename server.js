const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3002;

const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//incorporate from homework instructions then delete line above 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connect(MONGODB_URI);
mongoose.set('useFindAndModify', false);

// Define API routes here
// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;