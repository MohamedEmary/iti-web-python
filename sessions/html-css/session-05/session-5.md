---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 5 \par}\vspace{0.1cm}\hrule\end{title}
date: December 29, 2024
---

<!-- TODO Review `sessionStorage` and `localStorage` From Video -->

# Handling Unsupported JS Features

<!-- Polyfill -->

If we have a feature not implemented in a browser, we can use a polyfill to add that feature to the browser. A polyfill is a piece of code that replicates the functionality of a feature not supported by a browser.

For example, if we want to use `localStorage` in a browser that does not support it, we can use a polyfill to add that functionality.

<!-- Modernizer Library -->

Local storage works on a per domain basis (not per page) so any HTML pages will share the same `LocalStorage` database as long as they are on the same domain.

If you are currently developing your web application by opening websites through the filesystem ie: `file://C:/Users/UserA/Documents/WWW/index.html` the browser cannot detect that 2 different pages are on the same domain so it will create a new `LocalStorage` database for each instance.

You can get around this by hosting your web application through a Local or Remote webserver that your accessing the website via `http://localhost:8080/index.html` or `https://example.com/index.html`.
