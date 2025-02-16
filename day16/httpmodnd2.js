var http=require('http');
http.createServer((req,res)=>{
    res.write(req.url);
    res.write("req meth using url-- res.write(req.url);")//using res we will write in web browser
    res.end();
    console.log("server started...");
}).listen(100)
