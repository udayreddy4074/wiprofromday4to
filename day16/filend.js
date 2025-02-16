/*var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.appendFile('sfile.txt','uday appending',(err,data)=>{
        res.write(data);
        res.end();
        
    })
    console.log("sever started file writing...")
}).listen(3000)/*

/*
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    console.log("Server started, reading file...");

    fs.readFile('sfile.txt', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error reading file!");
            console.error("File read error:", err.message);
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);
        res.end();
    });

}).listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});*/
/*
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    console.log("Server started, appending to file...");

    fs.appendFile('sfile.txt', ' Uday appending\n', (err) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error appending to file!");
            console.error("File append error:", err.message);
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
       
        res.end("data added sucessfully");

    });

}).listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});*/
/*
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    console.log("Server started, writing to file...");

    fs.writeFile('sfile.txt', 'New Data: Uday is writing\n', (err) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error writing to file!");
            console.error("File write error:", err.message);
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Data written successfully!");
    });

}).listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});*/


//here appendfile and writefile doesnt show  the op in web so we need to use the readfile meth

/*
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    console.log("Server started...");

    // Overwrite File Content
    fs.writeFile('sfile.txt', 'New Data: Uday is writing\n', (err) => { //replace all text and return the what you write if file not found it will create automatecally
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error writing to file!");
            console.error("File write error:", err.message);
            return;
        }

        // Now Read the File and Display it
        fs.readFile('sfile.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error reading file!");
                console.error("File read error:", err.message);
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("File Updated! New Content:\n\n" + data);
        });
    });

}).listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});

*/

// if we need to delete the file we use unlink

var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    console.log("Server started, deleting file.");

    fs.unlink('sfile.txt', (err) => {
        if (err) throw err; 
            
            Console.log("file deleted");
})
}).listen(3000)
 
