// new URL() is used to safely manipulate the URL, and after that we apply the changes in the real browser using window.location

const url = new URL(window.location);
url.hostname = '';
url.pathname = '';
url.search = '?category=desktop&p=0000';

// location.search = url.search

