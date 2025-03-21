-- 1 - Display Departments Data Which Contains More Than 200 Employees
SELECT
  dept_name,
  e.dept_no,
  COUNT(e.dept_no)
FROM
  employees e,
  departments d
WHERE
  e.dept_no = d.dept_no
GROUP BY
  e.dept_no,
  dept_name
HAVING
  COUNT(e.dept_no) > 200;


-- 2 - Display Employee Data Which Change Salary More Than 3 Times
SELECT
  first_name,
  last_name,
  COUNT(s.salary)
FROM
  employees e,
  salaries s
WHERE
  e.emp_no = s.emp_no
GROUP BY
  first_name,
  last_name,
  e.emp_no
HAVING
  COUNT(s.salary) > 3;


-- 3 - Display Maximum Salary On Each Department
SELECT
  dept_no,
  MAX(salary)
FROM
  employees
WHERE
  dept_no IS NOT NULL
GROUP BY
  dept_no;


-- IF WE WANT TO DISPLAY DEPARTMENT NAME
SELECT
  dept_name,
  MAX(e.salary)
FROM
  departments d,
  employees e
WHERE
  d.dept_no = e.dept_no
GROUP BY
  dept_name;


-- 4 - Display Departments Data Which Total Salary of employees on This Department is more than 1000000
SELECT
  dept_no,
  SUM(salary)
FROM
  employees
WHERE
  dept_no IS NOT NULL
GROUP BY
  dept_no
HAVING
  SUM(salary) > 1000000;


-- 5 - Display Top 5 different Salary On Department "Finance"
SELECT
  dept_name,
  first_name,
  salary
FROM
  employees e,
  departments d
WHERE
  LOWER(dept_name) = 'finance'
  AND e.dept_no = d.dept_no
ORDER BY
  salary DESC LIMIT 5;


-- 6 - Display Courses Which No Learning for Any Student.
SELECT
  course_no,
  course_name
FROM
  courses
EXCEPT
SELECT DISTINCT
  sc.course_no,
  course_name
FROM
  students_course sc,
  courses c
WHERE
  sc.course_no = c.course_no;


-- 7 - Display Total Grade For All Courses With Student Name.
SELECT
  s.student_name,
  SUM(sc.grade)
FROM
  students_course sc
  JOIN students s ON s.student_no = sc.student_no
GROUP BY
  s.student_no;


-- 8 - Display Departments Which Average Salary For All Employees is less than 75000.
SELECT
  d.dept_no,
  d.dept_name,
  AVG(e.salary)
FROM
  departments d
  JOIN employees e ON d.dept_no = e.dept_no
GROUP BY
  d.dept_no
HAVING
  AVG(e.salary) < 75000;


-- 9 - Display Students Which Learn More Than 300 Hours.
SELECT
  s.student_no,
  s.student_name,
  SUM(c.course_duration)
FROM
  students s
  JOIN students_course sc ON s.student_no = sc.student_no
  JOIN courses c ON c.course_no = sc.course_no
GROUP BY
  s.student_no,
  c.course_no
HAVING
  SUM(c.course_duration) > 300;


-- 10 - Using "Union" & "Multiple Fuction" Display 2 Maximum **different** salary.
-- TODO try using EXCEPT
(
  SELECT
    MAX(salary)
  FROM
    employees
)
UNION
(
  SELECT DISTINCT
    salary
  FROM
    employees
  WHERE
    salary IS NOT NULL
  ORDER BY
    salary DESC limit 1
  OFFSET
    1
);


-- 11 - Display Employee Full Name With Department Name Which is Working On It
SELECT
  CONCAT(first_name, ' ', last_name, ': ', dept_name) AS full_name
FROM
  employees e,
  departments d
WHERE
  e.dept_no = d.dept_no;


-- 12 - Display Departments & Employees Data which have Employees or not
SELECT
  *
FROM
  departments d
  LEFT JOIN employees e ON e.dept_no = d.dept_no;


-- 13 - Display Student Name and Course Name and Grade for him
SELECT
  student_name,
  c.course_name,
  grade
FROM
  students_course sc,
  students s,
  courses c
WHERE
  sc.student_no = s.student_no
  AND c.course_no = sc.course_no;


-- 14 - Display Employee Name And Data of Supervisor which name of Employee start with B
SELECT
  CONCAT(e1.first_name, ' ', e1.last_name) AS employee_name,
  e1.super_no,
  CONCAT(e2.first_name, ' ', e2.last_name) AS supervisor_name
FROM
  employees e1,
  employees e2
WHERE
  e1.super_no IS NOT NULL
  AND e1.super_no = e2.emp_no
  AND e1.first_name LIKE 'B%';


-- 15 - Display Employee Data Which has history in department and salary
(
  SELECT
    first_name,
    last_name
  FROM
    employees e,
    salaries s
  WHERE
    s.emp_no = e.emp_no
)
INTERSECT
(
  SELECT
    e.first_name,
    e.last_name
  FROM
    employees e,
    dept_emp de
  WHERE
    e.emp_no = de.emp_no
);