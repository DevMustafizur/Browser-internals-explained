// location api
// window.location is a web api which helps us to work current page.
// why need?????
// to know current page, to navigate another page, handeling query string, tracking, redirect. 

// location api uses

// get and update
const href = window.location.href;
const hrefUpdate = window.location.href == "https://www.facebook.com"

// get and update
const host = window.location.host;
const hostUpdate = window.location.host == "127.0.0.1"

// get and update
const hostname = window.location.hostname
const hostNameUpdate = window.location.hostname == "127.0.0.1:6000"

// get and update
const protocal = window.location.protocol;
const protocolUpdate = window.location.protocol == 'http'

// get and update
const port = window.location.port;
const portUpdate = window.location.port == 6000;

// get and update
const pathname = window.location.pathname;
const pathnameUpdate = window.location.pathname == "/about"

// get and update
// const search = window.location.search;
// const searchUpdate = window.location == `?page=2&category=computer&price=450000&country=BD`

const search = window.location.search;
const params = search.replace("?", '').split("&")
const queryObj = {}
params.forEach(item => {
    const [key, value] = item.split("=")
    queryObj[key] = value;
});



