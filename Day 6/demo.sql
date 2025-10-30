-- Apply normalization (up to Third Normal Form - 3NF) and design separate tables:
-- Student(StudentID, StudentName)
-- Course(CourseID, CourseName, DeptID)
-- Instructor(InstructorID, InstructorName, DeptID)
-- Department(DeptID, DeptName)
-- Enrollment(StudentID, CourseID, InstructorID, Grade)
-- Define primary and foreign keys appropriately.
-- Concepts Covered: Normalization, DDL, Primary and Foreign Keys
-- User Story 2 — Data Population and Joins
-- As an academic coordinator, I want to view student-course relationships and instructor assignments using SQL joins.

-- Tasks:
-- Insert sample records in each table (minimum 5 students, 5 courses, 3 instructors, 2 departments).
-- Write queries for the following:
-- Retrieve a list of students with their enrolled course names and instructors.
-- Display all courses along with their department names (use INNER JOIN).
-- Retrieve all students and the courses they are enrolled in, including those who have not yet been assigned a grade (use LEFT JOIN).
-- List instructors who currently have no students assigned (use RIGHT JOIN).
-- Concepts Covered: DML, INNER/LEFT/RIGHT Joins


Create database assignment
create table student(studentid int primary key, studentname varchar(50));
create table course(courseid int,coursename varchar(50),deptid int);
create table instructor(instructorid primary key, instructorname varchar(20),deptid int foreign key);
create  table department(deptid int primary key)
CREATE TABLE enrollment (
    studentid INT,
    courseid INT,
    instructorid INT,
    grade VARCHAR(5)
);
insert into student(studentid,studentname) values(1,'harinee'),(2,'vimal'),(3,'sanjith'),(4,'abi'),(5,'sumi'); 
insert into course(courseid,coursename,deptid) values(201,'networks',123),(301,'operating system',456), (401,'python',456),
(501,'embedded system',123),(601,'c++',456); 
insert into instructor(instructorid,instructorname,deptid) values(11,'subha',456),(22,'hema',123),(33,'viji',123),
(44,'suja',456), (55,'muru',123); 
insert into department(deptid,deptname) values(123,'ece'),(456,'it'); 
insert into enrollment(studentid,courseid,instructorid,grade) values(1,201,22,'a'),(4,301,33,'b'),(2,501,44,'a'),
(3,301,55,'a'), (2,301,33,'a'),(2,601,22,'a');

-- Display all courses along with their department names (use INNER JOIN).
select course.coursename,department.deptname from course inner join department on course.deptid=department.deptid;

-- Retrieve all students and the courses they are enrolled in, including those who have not yet been assigned a grade (use LEFT JOIN).
select student.studentname,course.coursename,enrollment.grade from student left join enrollment on student.studentid=enrollment.studentid left join course on enrollment.courseid=course.courseid;

-- List instructors who currently have no students assigned (use RIGHT JOIN).
select instructor.instructorname from enrollment right join instructor on enrollment.instructorid=instructor.instructorid where enrollment.instructorid is null

-- Retrieve a list of students with their enrolled course names and instructors.
select student.studentname,course.coursename,instructor.instructorname from enrollment inner join student on enrollment.studentid=student.studentid left join instructor on instructor.instructorid=enrollment.instructorid left join course on course.courseid=enrollment.courseid;

-- Retrieve all students who scored the highest grade (‘A’) in any course.
-- Find the course(s) where the average grade is highest using a subquery.