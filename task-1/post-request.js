// POST
import http from 'http';

const data = JSON.stringify({
  song: 'Arcadia',
});

const options = {
  host: 'localhost',
  port: 8080,
  path: '/',
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'Content-legth': data.length,
  },
}

const req = http.request(options, (res) => {
  console.log(`status code: ${res.statusCode}`);
  res.setEncoding('utf8');
  res.on('data', chunk => console.log(`body: ${chunk}`));
  res.on('end', () => console.log('In Arcadia, Arcadia'));
})

req.on('error', (e) => console.error());

req.write(data);
req.end();