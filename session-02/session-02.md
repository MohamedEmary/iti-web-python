---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 2 \par}\vspace{0.1cm}\hrule\end{title}
date: December 4, 2024
---

# `name` Attribute Constraints

1. HTML name attributes cannot:

   - Start with a number
   - Contain spaces
   - Contain special characters except `-` and `_`

2. Valid name attributes:
   - Must start with a letter (a-z or A-Z)
   - Can contain letters, numbers, hyphens, and underscores
   - Are case-sensitive

Here's an example showing valid and invalid name values:

```{.html .numberLines}
<!-- Valid name attributes -->
<input name="user-name" />
<input name="firstName" />
<input name="contact_info" />


<!-- Invalid name attributes -->
<!-- Cannot start with number -->
<input name="1user" />
<!-- Cannot contain spaces -->
<input name="user name" />
<!-- Cannot contain special chars -->
<input name="user@info" />
```

General Advices:

- Use camelCase or kebab-case for name values
- Keep names descriptive but concise
- Be consistent with naming conventions across your project
