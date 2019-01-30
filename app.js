const express = require("express");
const bodyParser = require("body-parser");
//const ejs = require("ejs");

const app = express();
const items = [];

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

app.get("/", function(req,res){
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options)

  res.render("list", {kindOfDay: day,
                      newListItems: items});
});

app.post("/", function(req,res){
  const newItem = req.body.newItem;
  res.redirect("/");

  items.push(newItem);

})

app.listen(3000, function(){
  console.log("server started on port 3000")
})
