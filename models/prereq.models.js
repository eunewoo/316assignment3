const sql = require("./db.js");

const Prerequisites = function(prereq) {
    this.course_rec_id = prereq.course_rec_id;
    this.course_prereq_rec_id = prereq.course_prereq_rec_id;
  };

Prerequisites.getAll = (id, result) => {
    console.log("getAll!");
    let query = "SELECT * FROM prereqs";
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
  
      console.log("prereqs: ", res);
      return result(null, res);
    });
  };

  module.exports = Prerequisites