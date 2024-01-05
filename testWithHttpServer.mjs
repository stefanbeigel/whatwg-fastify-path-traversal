import http from 'http';

http.createServer((request, response) => {
    let targetUrl = new URL(`https://abc.com${request.url}`);
    console.log(`incoming url: ${request.url}`);
    console.log(`target url: ${targetUrl}`);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3000);
