const fs = require('fs')
const path = require('path');
require('http')
.Server((req, res) => {
    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'
    };

    res.writeHead(200, CORS);

    if (req.url === '/result4/') {
      const data = { message: 'itmo286135', 'x-result': req.headers['x-test']}
  
      let body = '';
      req.on('data', function (chunk) {
        body += chunk;
      }).on('end', () => {
        return res.end(JSON.stringify({...data, 'x-body': body}))
      })
    } else {
      res.end('itmo286135');
    }
})
.listen(process.env.PORT);