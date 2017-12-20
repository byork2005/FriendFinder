var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var friends = require("./app/data/friend.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(process.env.PORT || 3000, function()
{
    console.log("Listening on Port:" + PORT)
});
