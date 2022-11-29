CREATE DATABASE IF NOT EXISTS courseman;

USE courseman;

CREATE TABLE IF NOT EXISTS students(
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT UNIQUE,
  first_name VARCHAR(256),
  last_name VARCHAR(256),
  password VARCHAR(256),
  level CHAR(2)
  )
  ;

INSERT INTO students (student_id, first_name, last_name, password, level)
       VALUES (123456789, "Harry", "Chung", "e38804c45d255359322d3a3c9d58522fe0528e87784b6724fca79dd67b891dd", "U2");

INSERT INTO students (student_id, first_name, last_name, password, level)
       VALUES (123456790, "Matt", "Lee", "0124f7d9cfb7da14c498781ff49752edf89cb08574cb19785aaa2a7b4722f5ed", "U3");

INSERT INTO students (student_id, first_name, last_name, password, level)
       VALUES (123456791, "SUE", "Park", "13a0461de73c38bf3aa73ccd4f207170cf1dece6300c9fc0248a9e0d70cb995a", "U4");


CREATE TABLE IF NOT EXISTS courses(
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id VARCHAR(8),
  course_name VARCHAR(80),
  course_seatsremaining INT,
  course_capacity INT);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE101", "Algorithmic Thinking", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE114", "Introduction to OBject Oriented Programming", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE214", "Data Structures", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE215", "Fundamentals of COmputer Science", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE216", "Programming Abstractions", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE220", "System Fundamentals I", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE300", "Technical Communications", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE303", "Introduction to the Theory of Computation", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE304", "Compiler Design", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE305", "Database Systems", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE306", "Operating Systems", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE310", "Computer Networks", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE316", "Software Development Fundamentals", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE320", "System Fundamentals II", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE331", "Computer Security Basics", 40, 40);

INSERT INTO courses (course_id, course_name, course_seatsremaining, course_capacity)
       VALUES ("CSE416", "Software Engineering", 40, 40);

CREATE TABLE IF NOT EXISTS prereqs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_rec_id INT,
  course_prereq_rec_id INT);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (3, 2);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (5, 3);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (6, 3);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (8, 3);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (8, 4);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (9, 5);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (9, 6);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (10, 5);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (11, 5);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (11, 14);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (12, 3);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (12, 6);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (13, 5);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (14, 6);

INSERT INTO prereqs (course_rec_id, course_prereq_rec_id)
   VALUES (16, 13);

CREATE TABLE IF NOT EXISTS transcript (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  student_id INT,
  course_name varchar(80) DEFAULT NULL);


  
