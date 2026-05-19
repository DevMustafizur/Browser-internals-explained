// window api

// window.location
// window.location is a window api.
// sometimes we nedd to get current url to verify or update then we use window.location;


// if we want to get protocal then we have to use window.location.protocal. and want to update then we have to write window.location.protocal = https;


// here if we update window.location property, then browser will be reload and go to server to get updated data.
// like- pathname = '/about' here browser will be reload and will go to server. 

// window.location provide some property and methods;
// like----

// get and update
const href =  window.location.href;
const hrefUpdate = window.location.href == "https://www.facebook.com"

// get and update
const host =  window.location.host;
const hostUpdate = window.location.host == "127.0.0.1"

// get and update
const hostname =  window.location.hostname
const hostNameUpdate = window.location.hostname == "127.0.0.1:6000"

// get and update
const protocal =  window.location.protocol;
const protocolUpdate = window.location.protocol == 'http'

// get and update
const port =  window.location.port;
const portUpdate = window.location.port == 6000;

// get and update
const pathname =  window.location.pathname;
const pathnameUpdate = window.location.pathname == "/about"

// get and update
const search =  window.location.search;
const searchUpdate = window.location.href == `?page=2&category=laptop&price=40000`;


const params = new URLSearchParams(search);
const price = params.get('price')
params.set('page', "2")
const page = params.get('page')
console.log(page)



// new URL class.
//to get easy href value/protocal value/port value etc, we can use new URL class. it provides a lot of property and methods
const url = new URL("http://127.0.0.1:5500/window-api/index.html?category=laptop&price=2000000")
const portt = url.port;
console.log(portt)
const param = url.searchParams;
const category = param.get("category")
console.log(category)


