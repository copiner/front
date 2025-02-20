const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const crypto = require('crypto');

const md5 = function(item){
  const hash = crypto.createHash('md5');
  return hash.update(item).digest('hex');
}

let filePath = './src/';
let previousMd5 = null;
let fsWait = false;
fs.watch(filePath,(event,filename)=>{
  //console.log(fsWait);
  if (filename){
        if (fsWait) return;//debounce
        fsWait = setTimeout(() => {
            fsWait = false;
        }, 200)
        var currentMd5 = md5(fs.readFileSync(filePath + filename))
        if (currentMd5 == previousMd5){
            return;
        }
        previousMd5 = currentMd5;
        console.log(`${filePath}文件发生更新`)
  }
})


const server = http.createServer(function(req,res){
    let reqUrl = req.url;
    if(reqUrl == '/'){
      reqUrl = '/index.html';
    }
    if(reqUrl == '/peter'){
      reqUrl = '/index.html';
    }
    if(reqUrl == '/egon'){
      reqUrl = '/index.html';
    }
    if(reqUrl == '/ray'){
      reqUrl = '/index.html';
    }
    if(reqUrl == '/winston'){
      reqUrl = '/index.html';
    }

    let pathName = url.parse(reqUrl).pathname;
    console.log(pathName);
   //let pathName = decodeURI(pathName);
    let mime = {
        "css" : "text/css",
        "html": "text/html",
        "gif" : "image/gif",
        "jpg" : "image/jpeg",
        "png" : "image/png",
        "svg" : "image/svg+xml",
        "tiff": "image/tiff",
        "txt" : "text/plain",
        "htc" : "text/x-component",
        "js"  : "text/javascript",
        "json": "application/json"
    };

    let ext = path.extname(pathName);
    ext = ext ? ext.slice(1) : "txt";
    let contentType = mime[ext];

    let fileName = path.resolve(__dirname +'/src'+ pathName);

    fs.readFile(fileName,function(err,data){
	    if(err){
    		res.writeHead(404,{'content-type':'text/html;charset="utf-8"'});
    		res.write('<h1>404</h1><p>NOT FOUND</p>');
    		res.end();
	    } else {
    		res.writeHead(200,{ 'content-type': contentType });
    		res.write(data);
    		res.end();
      }
	});



});

server.listen(9000,()=>{
    console.log('server is listening in 9000');
});
