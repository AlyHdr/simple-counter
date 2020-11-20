const express = require('express')
var fs = require("fs");
const app = express();
const port = 8000;
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
  var number = 0
  fs.readFile("temp.txt", (err, data) =>{
    if (err) { console.log(err) }
    result = parseInt(data.toString()) +1
    res.render("home",{
      number: result
    })
    fs.writeFile("temp.txt", result+"", (err) => {
      if (err) console.log(err);
    });
  });
})
app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${port}!`)
});