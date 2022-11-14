const express = require("express");
const cors = require("cors");
const TestComp = require('./controller/testcomp.controller');


const app = express();

//added for POST method
const sql2 = require("./models/db.js");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//api added
app.get('/api/courseman/getCourses', TestComp.getTheTable);
console.log(TestComp.getTheTable);

app.get('/api/courseman/prereqs', TestComp.getPrereqTable);

app.post("/api/student", (req,res)=>{
  const first_name = req.body.first_name;
  // console.log(req.body);
  sql2.query("INSERT INTO students (first_name) values (?)",[first_name],
  function(err,rows,fields){
      if(err){
          console.log("실패");
          // console.log(err);
      }else{
          console.log("성공");
          // console.log(rows);
      };
  });

  
});



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to testcomp application." });
});






// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
