var http=require('http');
http.createServer((req,res)=>{
    res.write("hello uday using res");
    res.end();
    console.log("server started...");
}).listen(100)
