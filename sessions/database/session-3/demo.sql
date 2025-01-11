-- Title: Cross Join
-- Cross join can be used via either `CROSS JOIN` or `,`
SELECT
  first_name,
  last_name,
  salary,
  dept_name
FROM
  employees,
  departments;


SELECT
  first_name,
  last_name,
  salary,
  dept_name
FROM
  employees e,
  departments d
WHERE
  e.dept_no = d.dept_no;


SELECT
  first_name,
  last_name,
  dept_no
FROM
  employees
WHERE
  dept_no IS NULL;


SELECT
  dept_name,
  dept_no
FROM
  departments;


SELECT
  student_name,
  course_name,
  grade
FROM
  students s,
  courses c,
  students_course sc
WHERE
  sc.student_no = s.student_no
  AND c.course_no = sc.course_no;


SELECT
  first_name,
  last_name,
  dept_name
FROM
  employees e,
  departments d,
  dept_emp de
WHERE
  e.emp_no = de.emp_no
  AND d.dept_no = de.dept_no
ORDER BY
  e.emp_no;


SELECT
  first_name,
  last_name,
  dept_name
FROM
  employees e
  LEFT JOIN departments d ON e.dept_no = d.dept_no
ORDER BY
  dept_name DESC;


SELECT
  first_name,
  last_name,
  dept_name
FROM
  employees e
  RIGHT JOIN departments d ON e.dept_no = d.dept_no;


SELECT
  e.first_name,
  e.last_name,
  s.first_name,
  s.last_name
FROM
  employees e,
  employees s
WHERE
  s.emp_no = e.super_no;


SELECT
  MIN(salary),
  MAX(salary),
  SUM(salary),
  AVG(salary),
  COUNT(salary)
FROM
  employees;


SELECT
  gender,
  SUM(salary)
FROM
  employees;


SELECT
  gender,
  SUM(salary)
FROM
  employees
GROUP BY
  gender;


SELECT
  dept_no,
  SUM(salary)
FROM
  employees
GROUP BY
  dept_no;


-- Sum of salary for each department
SELECT
  dept_name,
  SUM(salary)
FROM
  employees e,
  departments d
WHERE
  e.dept_no = d.dept_no
GROUP BY
  dept_name;


-- Sum of salary and Count of employees in each department
SELECT
  dept_name,
  SUM(salary),
  COUNT(emp_no)
FROM
  employees e,
  departments d
WHERE
  e.dept_no = d.dept_no
GROUP BY
  dept_name;


-- When applying a condition on a function put it inside `HAVING` clause not `WHERE`
SELECT
  dept_name,
  SUM(salary),
  COUNT(emp_no)
FROM
  employees e,
  departments d
WHERE
  e.dept_no = d.dept_no
GROUP BY
  dept_name
HAVING
  SUM(salary) > 15000000
ORDER BY
  SUM(salary) DESC;


SELECT
  student_name,
  SUM(grade)
FROM
  students_course sc,
  students s
WHERE
  s.student_no = sc.student_no
GROUP BY
  student_name
HAVING
  SUM(grade) > 400;


-- to get the number of courses for each student
SELECT
  student_name,
  COUNT(course_no)
FROM
  students_course sc,
  students s
WHERE
  s.student_no = sc.student_no
GROUP BY
  student_name;


-- To get students with age > 25
-- Here we used `WHERE` not `HAVING` because we are filtering on a column not on a function
SELECT
  student_name,
  COUNT(course_no)
FROM
  students_course sc,
  students s
WHERE
  s.student_no = sc.student_no
  AND age > 25
GROUP BY
  student_name;


-- Here we are grouping by student_no not student_name because we may have two students with the same name which will cause them to be grouped together as one student
SELECT
  student_name,
  SUM(grade),
  COUNT(course_no)
FROM
  students s,
  students_course sc
WHERE
  s.student_no = sc.student_no
GROUP BY
  s.student_no,
  student_name;


SELECT
  e.emp_no,
  first_name,
  last_name,
  COUNT(s.salary) AS emp_salary_count
  -- COUNT(DISTINCT s.salary) AS emp_salary_count
  -- COUNT(s.emp_no) AS emp_count
FROM
  employees e,
  salaries s
WHERE
  e.emp_no = s.emp_no
GROUP BY
  e.emp_no,
  first_name,
  last_name
  -- HAVING
  --   COUNT(e.emp_no) > 10
  -- OR
  --   COUNT(s.salary) > 10
ORDER BY
  emp_no;


SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary > 105000;


SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary < 120000;


-- To get the result of the 2 queries above in one table we can use `UNION ALL`
-- We can use `UNION ALL` with any number of queries
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary > 105000
UNION ALL
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary < 120000;


-- There is a problem here. if we have a value that applies to both queries it will be shown twice
-- So to avoid this we can use `UNION` instead of `UNION ALL`
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary > 105000
UNION
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary < 130000
ORDER BY
  first_name,
  last_name;


-- We can also use `WHERE ... OR ...` to get the same result
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary > 105000
  OR salary < 130000
ORDER BY
  first_name,
  last_name;


-- TODO the emp1, emp2 part and the cross join
-- See awad msg
-- For the union to work we must satisfy the following conditions:
-- 1. The number of columns in each query must be the same
-- 2. The data type of each column must be the same
--
-- You may have two different columns but with the same data type the union will work for that case but the data will be meaningless, so you should be careful when using `UNION`
-- 
-- TODO review intersect part
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary > 105000
INTERSECT
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary < 130000
ORDER BY
  first_name,
  last_name;


SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary BETWEEN 105000 AND 130000
ORDER BY
  first_name,
  last_name;


-- Except return what is in the first query and not in the second query
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary > 105000
EXCEPT
SELECT
  first_name,
  last_name,
  salary
FROM
  employees
WHERE
  salary < 120000;


-- to get the departments that have no employees
SELECT
  dept_no,
  dept_name
FROM
  departments
EXCEPT
SELECT DISTINCT
  d.dept_no,
  dept_name
FROM
  employees e,
  departments d
WHERE
  e.dept_no = d.dept_no;