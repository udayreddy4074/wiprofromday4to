var http=require('http');
var uc=require('upper-case');
http.createServer((req,res)=>{
    res.write(uc.upperCase("req meth using url-- res.write(req.url);"));//using res we will write in web browser in  upper case
    res.end();
    console.log("server started...");
}).listen(3000)
