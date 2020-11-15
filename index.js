const fs = require('fs')
const path = require('path');
require('http')
.Server((req, res) => {
    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'X-Author' : 'itmo286135',
        'Content-Type': 'text/plain; charset=UTF-8',
        'Access-Control-Allow-Methods': 'GET,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
    };

    res.writeHead(200, CORS);

    if (req.url === '/login/') {
        return res.end('itmo286135');
      } else if(req.url === '/promise/') {
        return res.end((function task(x) {
          return new Promise((resolve, reject) => {
            if (x < 18) { resolve('yes')} else { reject('no') }
          })
        }).toString())
      } else if (req.url === '/fetch/') {
        const filePath = path.join(__dirname, 'index.html');
    
        res.writeHead(200, {
          ...CORS,
          'Content-Type': 'text/html'
        });
    
        fs.readFile(filePath, (err, html) => {
          res.write(html);
          res.end();
        });
      } else {
        res.end('itmo286135');
      }
})
.listen(process.env.PORT);