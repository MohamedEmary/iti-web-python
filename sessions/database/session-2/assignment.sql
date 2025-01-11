SET
  search_path TO training;


SELECT
  *
FROM
  employees;


-- 1. Display Employees Which First Name contains Character 'm' 
SELECT
  first_name,
  last_name
FROM
  employees
WHERE
  -- LOWER(first_name) LIKE '%m%';
  first_name LIKE '%m%'
  OR first_name LIKE '%M%';


-- 2. Display Employees Data Which Earn Salary greater than 60000
SELECT
  first_name,
  salary
FROM
  employees
WHERE
  salary > 60000;


-- 3. Display Employee Full Name With Department Number
SELECT
  CONCAT(
    first_name,
    " ",
    last_name,
    ' works in dept_no: ',
    dept_no
  )
FROM
  employees;


-- 4. Display Student Number Which has Grade Greater than 70 on any Course
SELECT
  student_no
FROM
  students_course
WHERE
  grade > 70;


-- 5. Display 2 maximum **Different** Salary For Employees
SELECT DISTINCT
  salary
FROM
  employees
WHERE
  salary IS NOT NULL
ORDER BY
  Salary DESC LIMIT 2;


-- 6. Display Employee Name With Annual Salary
SELECT
  CONCAT(
    first_name,
    ' ',
    last_name,
    ' yearly salary (no bonus) = ',
    salary * 12
  )
FROM
  employees;


-- 7. Display Employee Who earn salary greater than 100000 and work in Department No 4
SELECT
  *
FROM
  employees
WHERE
  salary > 100000
  AND dept_no = 4;


-- 8. Display Male Employee Data Only 
SELECT
  *
FROM
  employees
WHERE
  gender = 'M';


-- 9. Display Employees Data which Has (null ) salary and has no bonus
SELECT
  first_name,
  salary,
  bonus
FROM
  employees
WHERE
  salary IS NOT NULL
  AND bonus IS NULL;


-- 10. Display Employees Data Which First Name Fourth Character is 'F'
SELECT
  first_name
FROM
  employees
WHERE
  first_name LIKE '___f%'
  OR first_name LIKE '___F%';


-- 11. Display Courses Data Where duration greater than 70
SELECT
  *
FROM
  courses
WHERE
  course_duration > 70;


-- 12. Display Minimum Grade to Course No 3 
SELECT
  *
FROM
  students_course
WHERE
  course_no = 3
ORDER BY
  grade LIMIT 1;


-- 13. Display Employee Data Which Work In Departments 1, 2
SELECT
  *
FROM
  employees
WHERE
  dept_no IN (1, 2);