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