-- 1- Update Employee By Increase Bonus to 10% of Salary For Employee In  Department "Marketing".
UPDATE employees
SET
  salary = salary * 1.1
WHERE
  dept_no = (
    SELECT
      dept_no
    FROM
      departments
    WHERE
      dept_name = 'Marketing'
  );


SELECT
  first_name,
  salary,
  dept_no
FROM
  employees
WHERE
  dept_no = (
    SELECT
      dept_no
    FROM
      departments
    WHERE
      dept_name = 'Marketing'
  );


-- 2- Delete Courses Which No Students Learn it And No Employees Teach it. 
SELECT
  course_no
FROM
  courses;


SELECT DISTINCT
  course_no
FROM
  students_course;


SELECT DISTINCT
  course_no
FROM
  emp_course;


DELETE FROM courses
WHERE
  course_no NOT IN (
    SELECT DISTINCT
      course_no
    FROM
      students_course
  )
  AND course_no NOT IN (
    SELECT DISTINCT
      course_no
    FROM
      emp_course
  );


-- 3- Increase Salary by 10% of it For Smallest 2 Different salaries on  Employees Table.
-- 3- Increase Salary by 10% of it For Smallest 2 Different salaries on  Employees Table.
UPDATE employees
SET
  salary = salary * 1.1
WHERE
  salary IN (
    SELECT DISTINCT
      salary
    FROM
      employees
    WHERE
      salary IS NOT NULL
    ORDER BY
      salary LIMIT 2
  );


SELECT
  first_name,
  salary
FROM
  employees
WHERE
  salary IN (
    SELECT DISTINCT
      salary
    FROM
      employees
    WHERE
      salary IS NOT NULL
    ORDER BY
      salary LIMIT 2
  );


SELECT DISTINCT
  salary
FROM
  employees
WHERE
  salary IS NOT NULL
ORDER BY
  salary LIMIT 2;


/* 
4 – Design Database For These Tables and make constraint 

- Sales ofcfie (Sales Ofifce_Num, Loc, Manger ID) 
- Employee (Emp_ID, Name, Sales Office_Num) 
- Property (Property_ID, Add, City, State, zip, Sales Office_Num) 
- Owner (Owner_ID, name) 
- Property_owner (Property_ID, Owner_ID, Percent_Owned)

- City Must be Cairo or Banha or Alex 
- Percent Must Be From 0 To 100 
- Default City is Cairo 
- Location Of Office Is Unique 
- Employee Name Must Entered and Office Location And Owner Name And Percent also must entered. 
- Primary Key And Foreign Key Constraints 
 */
CREATE
DATABASE SalesDB;


CREATE TABLE
  sales_office (
    sales_office_num INT PRIMARY KEY,
    loc VARCHAR(100) UNIQUE NOT NULL,
    manger_id INT
  );


CREATE TABLE
  employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    sales_office_num INT,
    FOREIGN KEY (sales_office_num) REFERENCES sales_office (sales_office_num)
  );


CREATE TABLE
  property (
    property_id INT PRIMARY KEY,
    ADD VARCHAR(50),
    city VARCHAR(30) DEFAULT 'Cairo' CHECK (city IN ('Cairo', 'Banha', 'Alex')),
    state VARCHAR(30),
    zip INT,
    sales_office_num INT,
    FOREIGN KEY (sales_office_num) REFERENCES sales_office (sales_office_num)
  );


CREATE TABLE
  owner (
    owner_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
  );


CREATE TABLE
  property_owner (
    property_id INT,
    owner_id INT,
    percent_owned INT NOT NULL CHECK (percent_owned BETWEEN 0 AND 100),
    PRIMARY KEY (property_id, owner_id)
  );