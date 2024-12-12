---
title: \begin{title}\centering\vspace*{1cm}\rule{\textwidth}{0.05cm}\linebreak\vspace{0.5cm}{\Huge\bfseries Session 7 JS \par}\vspace{0.1cm}\hrule\end{title}
date: December 11, 2024
---

# Debugger

To use the JS debugger in your browser, you can use the `debugger` statement in your code, but the browser must have the developer tools open.

# BOM & DOM

## BOM (Browser Object Model)

- `innerHeight`: height of the browser window
- `innerWidth`: width of the browser window
- `window.open()`: open a new window
- `window.close()`: close the current window

## DOM (Document Object Model)


Suppose we have this HTML code:

```{.html .numberLines}
<div id="div1">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iusto!
  <div id="par1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, hic!
  </div>
</div>
```

To get the 