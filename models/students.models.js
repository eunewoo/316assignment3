const sql = require("./db.js");

const Students = function(student) {
    this.student_id = student.student_id;
    this.password = student.password;
  };

Students.getAll = (id, result) => {
    console.log("getAll!");
    let query = "SELECT * FROM students";
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
  
      console.log("students: ", res);
      return result(null, res);
    });
  };

  module.exports = Students