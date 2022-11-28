const CourseList = require('../models/testcomp.models');
const Prerequisites = require('../models/prereq.models');
const Students = require('../models/students.models');

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

            res.json(data);
        }
      });
};

exports.getPrereqTable = (req, res) => {
  const course_rec_id = null;

  Prerequisites.getAll(course_rec_id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });

      else {
          // console.log("Server: res_sending: " + data);

          res.json(data);
      }
    });
};

exports.getStudentTable = (req, res) => {
  console.log('params1', req.params.id);
  const student_id = req.student_id;
  console.log('student_id', student_id);

  Students.getAll(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });

      else {
          // console.log("Server: res_sending: " + data);

          res.json(data);
      }
    });
};
