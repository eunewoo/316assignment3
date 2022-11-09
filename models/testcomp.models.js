const sql = require("./db.js");

// constructor
const CourseList = function(course) {
  this.id = course.id;
  this.prerequisites = course.prerequisites;
  this.description = course.description;
};

const Prerequisites = function(prereq) {
  this.course_rec_id = prereq.course_rec_id;
  this.course_prereq_rec_id = prereq.course_prereq_rec_id;
};


Prerequisites.getAll = (course_rec_id, result) => {
  console.log("getAll!");
  let query = "SELECT * FROM prereqs";
    console.log("id: " + course_rec_id);
  if (course_rec_id) {
    query += ` WHERE id = '${course_rec_id}'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("prereqs: ", res);
    return result(null, res);
  });
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