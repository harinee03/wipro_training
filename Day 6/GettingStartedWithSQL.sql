-- We have to follow below steps for getting started with Database
-- Step 1: Install MySQL Server and MySQL Workbench
-- Step 2: Creating a Database or use an existing Database
-- Step 3: Creating a Table with required columns, column data types and constraints
-- Step 4: Inserting Data into the Table    
-- Step 5: Querying the Data from the Table  using SELECT statement
-- Step 6: Updating the Data in the Table using UPDATE statement
-- Step 7: Deleting the Data from the Table using DELETE statement
-- Step 8: Using WHERE clause to filter the data based on conditions
-- Step 9: Using ORDER BY clause to sort the data
-- Step 10: Using Aggregate functions like COUNT, SUM, AVG, MAX, MIN
-- Step 11: Using GROUP BY clause to group the data based on a column
-- Step 12: Using JOINs to combine data from multiple tables

-- following types of relational Databases are famous in industry
-- mySQL : Open Source Database widely used in Web Applications
-- PostgreSQL : Advanced Open Source Database with strong community support
-- Oracle : Enterprise level Database with advanced features and support
-- Microsoft SQL Server : Enterprise level Database used in large organizations MS Stack based applications
-- SQLite : Lightweight Database often used in mobile applications
-- MariaDB : Fork of MySQL with additional features and improvements
-- IBM DB2 : Enterprise level Database used in large organizations with IBM Stack based applications

Create database if not exists EmployeeDB;
use EmployeeDB;
create table if not exists Employees(
    employeeID int primary key auto_increment,
    firstname varchar(50) not null,
    lastname varchar(50) not null;
    email varchar(50) unique not null;
    hiredata date not null,
    salary decimal(10,2) not null --2 decimal 

);
insert into Employees(firstname,lastname,email,hiredata,salary)
 values ('harinee','murugesh','harineemurugesh@gmail.com','2025-10-30',"12000.2"),
  ('vimal','murugesh','vimal_m@gmail.com','2025-12-03','120000'),
   ('abi','kumar','abikumar@gmail.com','2025-11-29','14656')
 select * from Employees;
 select firstname,lastname,email from Employees;

