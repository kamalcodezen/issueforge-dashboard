# GitHub Issues Tracker

A simple GitHub Issues Tracker web application where users can view, search, and filter issues.  
This project was built using **HTML, TailwindCSS, DaisyUI, and JavaScript**.

---

##  Live Site

[(https://kamalcodezen.github.io/issueforge-dashboard/)]

##  GitHub Repository

[(https://github.com/kamalcodezen/issueforge-dashboard)]


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

---

## 3. What is the difference between map(), filter(), and forEach()?

`map()` goes through each element of an array and returns a **new array** with updated values after applying a function.

`filter()` checks each value of an array and returns a **new array** that contains only the elements that match a specific condition.

`forEach()` is used to loop through each element of an array and perform an action. It **does not return a new array**.

### Example

```javascript
const numbers = [1, 2, 3, 4];

// map
const multiply = numbers.map((num)=> num* 3);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);

// forEach
numbers.forEach(num => console.log(num));
---
```

## 4. What is an arrow function?

It uses the `=>` syntax.

Arrow functions can also return values **implicitly** without writing the `return` keyword.

---


## 5. What are template literals?

Template literals allow us to access **variables, functions, or expressions** inside a string.

The expression runs at **runtime**, and the result is placed inside the template string using `${}`.

---
