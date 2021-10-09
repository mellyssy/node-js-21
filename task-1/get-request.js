// GET
import http from 'http';

http.get('http://localhost:8080', (res) => {
  res.setEncoding('utf8');
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data);
  })
}).on('error', (e) => {
  console.error(`Something bad happened: ${e.message}`);
});
