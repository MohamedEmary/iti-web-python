-- 1 - Display Departments Data Which Contains More Than 200 Employees
SELECT
  d.dept_no,
  dept_name,
  COUNT(e.emp_no) "Employees"
FROM
  departments d
  JOIN employees e ON d.dept_no = e.dept_no
GROUP BY
  d.dept_no
HAVING
  COUNT(emp_no) > 200;


-- 2: Display Employee Data Which Change Salary More Than 3 Times:
SELECT
  CONCAT(e.first_name, ' ', e.last_name) "Name",
  COUNT(s.emp_no) "Salary Change"
FROM
  salaries s,
  employees e
WHERE
  s.emp_no = e.emp_no
GROUP BY
  e.first_name,
  e.last_name
HAVING
  COUNT(s.emp_no) > 3;


-- 3: Display Maximum Salary On Each Department:
SELECT
  dept_name "Department",
  MAX(e.salary) "Max Salary"
FROM
  departments d,
  employees e
WHERE
  d.dept_no = e.dept_no
GROUP BY
  dept_name;


-- 4: Display Departments Data Which Total Salary of employees on This Department is more than 1000000:
SELECT
  d.dept_no,
  d.dept_name,
  SUM(e.salary)
FROM
  departments d
  JOIN employees e ON e.dept_no = d.dept_no
GROUP BY
  d.dept_no
HAVING
  SUM(e.salary) > 1000000;


-- 5: Display Top 5 different Salary On Department "Finance:
SELECT DISTINCT
  e.salary
FROM
  employees e
  JOIN departments d ON e.dept_no = d.dept_no
WHERE
  d.dept_name = 'Finance'
ORDER BY
  e.salary DESC limit 5;


-- 6: Display Courses Which No Learning for Any Student:
SELECT
  c.course_no,
  c.course_name
FROM
  courses c
  LEFT JOIN students_course sc ON sc.course_no = c.course_no
WHERE
  sc.student_no IS NULL;


-- 7: Display Total Grade For All Courses With Student Name:
SELECT
  s.student_name,
  SUM(sc.grade)
FROM
  students_course sc
  JOIN students s ON s.student_no = sc.student_no
GROUP BY
  s.student_no;


-- 8: Display Departments Which Average Salary For All Employees is less than 75000:
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


-- 9: Display Students Which Learn More Than 300 Hours:
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


-- 10: Using “Union” & “Multiple Function” Display 2 Maximum different salary:
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


-- 11: Display Employee Full Name With Department Name Which is Working On It:
SELECT
  CONCAT(e.first_name, ' ', e.last_name) "Name",
  d.dept_name
FROM
  employees e
  JOIN departments d ON e.dept_no = d.dept_no;


-- 12: Display Departments & Employees Data which have Employees or not:
SELECT
  *
FROM
  departments d
  LEFT JOIN employees e ON e.dept_no = d.dept_no;


-- 13: Display Student Name and Course Name and Grade for him:
SELECT
  s.student_name,
  c.course_name,
  sc.grade
FROM
  students s
  JOIN students_course sc ON s.student_no = sc.student_no
  JOIN courses c ON c.course_no = sc.course_no;


-- 14: Display Employee Name And Data of Supervisor which name of Employee start with B:
SELECT
  CONCAT(e.first_name, ' ', e.last_name) AS "employee name",
  CONCAT(s.first_name, ' ', s.last_name) AS "supervisor name"
FROM
  employees e
  LEFT JOIN employees s ON e.emp_no = s.emp_no
WHERE
  e.first_name LIKE 'B%';


-- 15: Display Employee Data Which has history in department and salary:
SELECT
  *
FROM
  employees e
  LEFT JOIN departments d ON e.dept_no = d.dept_no
  LEFT JOIN salaries s ON e.emp_no = s.emp_no
WHERE
  s.emp_no IS NOT NULL
  OR e.dept_no IS NOT NULL