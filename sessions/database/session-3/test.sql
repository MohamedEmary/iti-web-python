-- 15 - Display Employee Data Which has history in department and salary
SELECT DISTINCT
  de.emp_no,
  de.dept_no
FROM
  dept_emp de,
  salaries s
WHERE
  de.emp_no = s.emp_no
  AND de.dept_no IS NOT NULL;