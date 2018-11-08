// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


///////////////////////
//API ROUTES
// =============================================================
require("./app/routing/apiRoutes.js")(app);

//HTML ROUTES
// =============================================================
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
// Bind our application to the TCP PORT to start listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
