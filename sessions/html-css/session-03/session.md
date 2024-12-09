---
title: \Huge Session 3
date: 2024-12-05
---

# `<a>` Tag Sudo Classes

The `<a>` tag has a number of pseudo-classes that can be used to style links in different ways. The most common ones are:

-   `:link` - A link that has not been visited.
-   `:visited` - A link that has been visited.
-   `:hover` - A link that is being hovered over.
-   `:active` - A link that is being clicked on.

When applying these pseudo-classes, the order in which they are applied is important. The order should be `:link`, `:visited`, `:hover`, and `:active`.

# List Points Position

To change the position of the list points, you can use the `list-style-position` property. The possible values are:

-   `inside` - The list points are inside the list item.
-   `outside` - The list points are outside the list item.

# `name`, `id` Attributes Constaints

When creating a value for `name` or `id` attributes, there are some constraints that need to be followed:

-   You cannot use spaces in the value.
-   The value must start with a letter.
-   The value can only contain letters, numbers, hyphens, and underscores.

# Choosing Multiple Elements in Input

To allow choosing multiple elements in an input field, you can use the `multiple` attribute. This attribute is used with the `<input>` tag and allows the user to select multiple files when interacting with the input field.
