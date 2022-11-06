const CourseList = require('../models/testcomp.models');
const Prerequisites = require('../models/testcomp.models');

// Retrieve all data in the table from the database (with condition).
exports.getTheTable = (req, res) => {
    const id = null;

    CourseList.getAll(id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });

        else {
            // console.log("Server: res_sending: " + data);

            res.json({"courses" : data});
        }
      });
};

exports.getTheTable2 = (req, res) => {
  const course_rec_id = null;

  Prerequisites.getAll(course_rec_id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });

      else {
          // console.log("Server: res_sending: " + data);

          res.json({"prereqs" : data});
      }
    });
};
