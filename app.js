var express       = require("express"),
    app           = express();

//============
// ROUTES
//============

// ROOT ROUTE
app.get("/", function(req, res){
    res.send("Landing");
});

// listen on port 3000
app.listen(3000 , function(){
    console.log("Server Started on port 3000. :)");
});