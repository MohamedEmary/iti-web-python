SELECT student_no,
  sc.course_no,
  course_name
FROM students_course sc
  INNER JOIN courses c ON sc.course_no = c.course_no;

SELECT student_no,
  sc.course_no,
  course_name
FROM students_course sc
  INNER JOIN courses c USING (course_no);

SELECT student_no,
  sc.course_no,
  course_name
FROM students_course sc
  FULL OUTER JOIN courses c ON sc.course_no = c.course_no;

SELECT first_name,
  last_name,
  salary,
  bonus
FROM employees
WHERE salary IN (
    SELECT salary
    FROM employees
    WHERE First_name = 'Ahmed'
  );

SELECT first_name,
  last_name,
  salary,
  bonus
FROM employees
WHERE salary = ANY (
    SELECT salary
    FROM employees
    WHERE First_name = 'Ahmed'
  );

SELECT first_name,
  last_name,
  salary,
  bonus
FROM employees
WHERE salary > ANY (
    SELECT salary
    FROM employees
    WHERE First_name = 'Ahmed'
  )
  AND first_name <> 'Ahmed'
ORDER BY first_name;

SELECT *
FROM departments
WHERE dept_no NOT IN(
    SELECT DISTINCT dept_no
    FROM employees
    WHERE dept_no IS NOT NULL
  );

SELECT first_name,
  last_name
FROM employees
WHERE salary IN (
    SELECT DISTINCT salary
    FROM employees
    WHERE salary IS NOT NULL
    ORDER BY salary DESC
    LIMIT 2
  );