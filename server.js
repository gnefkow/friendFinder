// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;


// Middleware:.
// ===========================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/'));


// Routes
// ===========================================================
require("./routing/htmlRoutes")(app)
require("./routing/apiRoutes")(app)


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});