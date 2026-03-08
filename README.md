# GitHub Issues Tracker

A simple GitHub Issues Tracker web application where users can view, search, and filter issues.  
This project was built using **HTML, TailwindCSS, DaisyUI, and JavaScript**.

---

## Live Site

[](https://kamalcodezen.github.io/issueforge-dashboard/)

## GitHub Repository

[](https://github.com/kamalcodezen/issueforge-dashboard)

---

# Assignment Questions

## 1. What is the difference between var, let, and const?

`var` has **function scope** but `let` and `const` have **block scope**.

`var`, we can declare a variable and change its value later.  
`let`, we can also change the value but we cannot redeclare it in the same scope.  
`const`, the value cannot be changed after declaration.

`var` variables are hoisted but their value becomes **undefined** before initialization.  
`let` variables are also hoisted but if we try to access them before declaration it gives an **error**.  
`const` works similar to `let`.

---

## 2. What is the spread operator (...)?

The spread operator `...` is used to copy or break values from an object or array.  
Using the spread operator we can create a new object and change its values.  
But the **original object does not change**.