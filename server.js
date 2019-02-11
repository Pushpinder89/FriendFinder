// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

///////////////////////
//API ROUTES
// =============================================================
require("./app/controllers/apiRoutes")(app);

//HTML ROUTES
// =============================================================
require("./app/controllers/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
// Bind our application to the TCP PORT to start listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
