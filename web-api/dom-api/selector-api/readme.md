## What is a DOM Selector?

A DOM selector is a method used to find and access HTML elements from the DOM tree.

Selectors allow JavaScript to locate specific elements so they can be manipulated, styled, or used with events.

---

### Example

```js
const heading = document.getElementById("title");
const button = document.querySelector(".btn");



## Where Do DOM Selectors Come From?

DOM selector methods come from the browser's DOM API.

When a browser loads an HTML document, it creates a DOM tree and provides a `document` object.

The selector methods are available on the `document` object:

- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- querySelector()
- querySelectorAll()

These methods are part of the DOM API, which is provided by the browser.