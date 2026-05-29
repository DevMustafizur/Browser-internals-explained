// মূলত 4 ধরনের navigation হয়:

// Parent
// Child
// Sibling
// Root/Document navigation

// 1- Parent navigation- > 
// Element Parent, Node Parent
// example
const child1 = document.querySelector(".child1");
const parentElementOfChild1 = child1.parentElement;


// 2. Child Navigation- >
// children,firstElementChild,lastElementChild, childNodes, firstChild, lastChild, childElementCount,
const parent = document.querySelector(".parent");
const children = parent.children;
const childNodes = parent.childNodes;
const firstChild = parent.firstChild
const lastChild = parent.lastChild;

// 3. Sibling Navigation- >
// nextElementSibling, previousElementSibling, nextSibling, previousSibling
const chil3 = document.querySelector(".child3");
const nextElementSibling = chil3.nextElementSibling;
const previousElementSibling = chil3.previousElementSibling;


// 4. Root / Document Navigation- >
const body = document.body
const head = document.head
const documentElement = document.documentElement
const activeElement = document.activeElement
console.log(activeElement)