const sql = require("./db.js");

// constructor
const CourseList = function(course) {
  this.id = course.id;
  this.prerequisites = course.prerequisites;
  this.description = course.description;
};




CourseList.getAll = (id, result) => {
    console.log("getAll!");
    let query = "SELECT * FROM courseList";
      console.log("id: " + id);
    if (id) {
      query += ` WHERE id = '${id}'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("courses: ", res);
      return result(null, res);
    });
};

module.exports = CourseList