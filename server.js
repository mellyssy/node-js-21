import http from 'http';

const port = 8080;

const requestListener = (req, res) => {
  console.log(`A request was made: ${req.method}`);

  if (req.method === 'POST') {
    const singer = req.headers.singer || 'Lana';
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => {
      const { song } = JSON.parse(data);
      console.log(`Song is: ${song} by ${singer}`);
    });
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Stream Arcadia');
};

const server = http.createServer(requestListener);
server.listen(port);