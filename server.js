var express = require("express");
var middleware = require("./middleware");
var app = express();
var PORT = 3000;


app.use(middleware.logger); // using middleware logger for app

// middleware using for app:
// app.use(middleware.requireAuthentication);

// app.get("/", function(req, res){
// res.send("Hello World");
// })

//middleware using fot only aboutus route:
app.get("/aboutus",middleware.requireAuthentication , function(req, res){ 
res.send("About Us Page");
})
app.listen(PORT, function(){
    console.log("Express server started. Port no: " + PORT);
});
app.use(express.static(__dirname + '/Public')) //_dirname: file path
// console.log(__dirname);