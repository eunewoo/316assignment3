const express = require("express");
const cors = require("cors");
const TestComp = require('./controller/testcomp.controller');


const app = express();

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

app.get('/api/courseman/prereqs', TestComp.getPrereqTable);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to testcomp application." });
});




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
