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

app.get('/api/courseman/students', TestComp.getStudentTable);

app.post("/api/student", (req,res)=>{
  const student_id = req.body.student_id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  // console.log(req.body);
  sql2.query("INSERT INTO students (student_id, first_name, last_name) values (?, ?, ?)",[student_id, first_name, last_name],
  function(err,rows,fields){
      if(err){
          console.log("Fail");
          // console.log(err);
      }else{
          console.log("Success");
          // console.log(rows);
      };
  });

  
});

app.post("/api/transcript", (req,res)=>{
  const student_id = req.body.student_id;
  const course_name = req.body.course_name;
  // console.log(req.body);
  sql2.query("INSERT INTO transcript (student_id, course_name) values (?, ?)",[student_id, course_name],
  function(err,rows,fields){
      if(err){
          console.log("Fail");
          // console.log(err);
      }else{
          console.log("Success");
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




