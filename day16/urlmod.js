var url=require('url');
var addr='https://chatgpt.com/c/67ad6442-87d8-8009-b8ea-9df67e359cf9'
var a=url.parse(addr,true);
console.log(a.auth);
console.log(a.port);
console.log(a.hostname);
console.log(a.path);
console.log(a.pathname);
console.log(a.search);//qurey