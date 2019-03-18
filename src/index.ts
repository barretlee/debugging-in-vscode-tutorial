import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.createReadStream(
      path.join(__dirname, '../index.html')
    ).pipe(res);
  } else {
    res.end(req.url);
  }
}).listen(8001, () => {
  console.log('run at 8001');
});
