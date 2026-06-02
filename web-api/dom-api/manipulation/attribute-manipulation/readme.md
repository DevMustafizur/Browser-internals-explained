# HTML Attribute Manipulation (Only Attribute Methods)

In JavaScript, HTML attributes can be manipulated using **attribute methods only**.

---

## HTML Attribute Manipulation Methods

---

### 1. setAttribute() - Add / Update
Used to add a new attribute or update an existing one.
element.setAttribute("title", "Hello");

### 2. getAttribute() - Read
Used to read the value of an attribute.
element.getAttribute("title");


### 3. hasAttribute() - Check
Used to check if an attribute exists (returns true/false).
element.hasAttribute("title");


### 4. removeAttribute() - Delete
Used to remove an attribute from an element.
element.removeAttribute("title");



## dataset in JavaScript

---

## What is dataset?

`dataset` is a DOM property used to access **HTML data attributes (`data-*`)**.

---

##  When to use dataset?

- To store custom data in HTML
- To access `data-*` attributes
- For dynamic UI handling (tabs, buttons, modals, filters)

---

##  Example
<div id="user" data-id="101" data-name="John"></div>

```js
