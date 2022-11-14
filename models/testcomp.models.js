const sql = require("./db.js");

// constructor
const CourseList = function(course) {
  this.course_id = course.course_id;
  this.course_name = course.course_name;
  this.course_seatsremaining = course.course_seatsremaining;
  this.course_capacity = course.course_capacity;
};




CourseList.getAll = (id, result) => {
    console.log("getAll!");
    let query = "SELECT * FROM courses";
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