---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 2 (Database) \par}\vspace{0.1cm}\hrule\end{title}
date: January 8, 2025
---

Foreign key can be `NULL`

1. `Departments` (Dno PK, Dname, Dloc, ....)
2. `Projects` (Pno PK, Pname, Ploc, .....)
3. `Employees` (SSN PK, Name, Salary, BD, Address, Dno FK, SuperSSN FK..)
4. `Dependent` ((ESSN FK, Fname, R) PK, Sex, BD)
5. `Dept_Loc` (Dno FK, Dloc) PK
6. `Works_On` ((ESSN FK, Pno FK) PK, Hours)

Properties Of PK :

- Unique
- Not `NULL`
- Table Contains 1 PK

Properties Of FK :

- Not Unique
- May Be `NULL`
- Table Contains 1 or More FK
- Must Be PK in another Table

\begin{box3}{Important Rule}{black}

$$
\begin{aligned}
\text{No Tables} &= \text{No Entities (both strong and weak)} \\
&+ \text{No M:M} \\
&+ \text{No MV (Multi-Valued Attribute)} \\
&- \text{No 1:1 Must From Two Sides}
\end{aligned}
$$

\end{box3}

---

<!-- TODO Review the first part of SQL lecture and the mapping lect again -->

Between and not Between doesn't show null values in results

1. Display Employees Which First Name contains Character 'm'
2. Display Employees Data Which Earn Salary greater than 60000
3. Display Employee Full Name With Department Number
4. Display Student Number Which has Grade Greater than 70 on any Course
5. Display 2 maximum Different Salary For Employees
6. Display Employee Name With Annual Salary
7. Display Employee Who earn salary greater than 100000 and work in Department No 4
8. Display Male Employee Data Only
9. Display Employees Data which Has salary and has no bonus
10. Display Employees Data Which First Name Fourth Character is ‘F'
11. Display Courses Data Where duration greater than 70
12. Display Minimum Grade to Course No 3
13. Display Employee Data Which Work In Departments 1,2

`DISTINCT` : is applied on all columns after it
sq