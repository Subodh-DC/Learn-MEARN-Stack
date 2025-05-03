let http = require('http');
let fs = require('fs');
let url = require('url');


http.createServer((req, res)=>{

    // res.end("Hello World")
    // res.write("Hello from localhot 3000")
    // return res.end()

    // read files
    // fs.readFile('index.html',(err, data)=>{
    //     if(err){
    //         res.writeHead(404, {'content-Type':'text/html'});
    //         return res.end("404 Not Found");
    //     }
    //     res.writeHead(200,{'content-Type':'text/html'});
    //     res.write(data);
    //     return res.end();
    // })

    // creat and write in the file
    // fs.appendFile('index2.html','<p>Hello this file is create and add this perfectly</p>',(err)=>{
    //     if(err){
    //         res.writeHead(404,{'content-Type':'index2.html'});
    //         return res.end("404 Not Found");
    //     }
    //     res.writeHead(200,{'content-Type':'index2.html'});
    //     res.write('file created successfully');
    //     return res.end();
    // })

    // read data from url
    let address = 'http://127.0.0.1:8080/default.html?year=2025&month=february';
    let q = url.parse(address, true);
    console.log(q.host);
    console.log(q.pathname); //return localhost 8080
    console.log(q.search); // return ?year=2025&month=february
    console.log(q.query); // return an object: {'year': '2017', 'month': 'february' }
    console.log(q.query.year); // return 2017
    console.log(q.query.month); // return 2025


}).listen(3000,()=>{
    console.log("server is ruining on port 3000")
})