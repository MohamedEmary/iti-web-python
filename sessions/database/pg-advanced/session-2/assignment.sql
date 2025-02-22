SELECT TO_CHAR(
    DATE_TRUNC('month', NOW()) + INTERVAL '1 month' + INTERVAL '2 days',
    'dd-Month-yyyy, Day'
  );

SELECT TO_CHAR(
    (
      DATE_TRUNC('month', NOW()) + INTERVAL '1 month' - INTERVAL '1 day'
    ),
    'dd-Month-yyyy, Day'
  );

SELECT last_name,
  TO_CHAR(hire_date, 'Day, the DDth of Month, YYYY') AS hire_date,
  TO_CHAR(
    hire_date + INTERVAL '6 months' + INTERVAL '6 days',
    'Day, the DDth of Month, YYYY'
  ) AS review
FROM employees;

SELECT department_id,
  MAX(salary) - MIN(salary) AS salary_difference
FROM employees
WHERE department_id IS NOT NULL
GROUP BY department_id
ORDER BY department_id;

SELECT l.city,
  d.department_name,
  COUNT(e.employee_id) AS employee_count,
  ROUND(AVG(e.salary), 2) AS avg_salary
FROM departments d
  INNER JOIN locations l ON d.location_id = l.location_id
  LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY l.city,
  d.department_name
ORDER BY l.city,
  d.department_name;

SELECT e.employee_id,
  e.last_name,
  e.salary
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees inner_emp
    WHERE inner_emp.department_id = e.department_id
  )
ORDER BY employee_id;

SELECT e.employee_id,
  e.last_name,
  e.salary,
  (
    SELECT last_name
    FROM employees
    WHERE employee_id = e.manager_id
  ) AS manager_name,
  (
    SELECT salary
    FROM employees
    WHERE employee_id = e.manager_id
  ) AS manager_salary
FROM employees e
WHERE e.salary > (
    SELECT salary
    FROM employees
    WHERE employee_id = e.manager_id
  );

SELECT *
FROM employees e
WHERE salary = (
    SELECT MIN(salary)
    FROM employees
    WHERE department_id = e.department_id
  );

SELECT *
FROM employees e
WHERE hire_date = (
    SELECT MIN(hire_date)
    FROM employees
    WHERE job_id = e.job_id
  );

SELECT e.employee_id,
  e.last_name,
  e.salary,
  d.department_id AS dept_id,
  d.department_name AS dept_name,
  j.job_id,
  j.job_title,
  l.city,
  l.street_address,
  c.country_id,
  c.country_name,
  r.region_id,
  r.region_name
FROM employees e
  LEFT JOIN departments d ON e.department_id = d.department_id
  LEFT JOIN jobs j ON e.job_id = j.job_id
  LEFT JOIN locations l ON d.location_id = l.location_id
  LEFT JOIN countries c ON l.country_id = c.country_id
  LEFT JOIN regions r ON c.region_id = r.region_id
ORDER BY e.employee_id;