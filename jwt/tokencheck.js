const http = require('http');
const jwt = require('jsonwebtoken');

const secret = 'mysecretkey';

const server = http.createServer((req, res) => {
  // Encode the 'species' as a JWT token
  const species = { species: 'robot' };
  const token = jwt.sign(species, secret);
  res.setHeader('Set-Cookie', `jwt=${token}`);
  
  // Check if the 'species' cookie is set to 'human'
  const cookies = req.headers.cookie;
  if (cookies) {
    const tokenCookie = cookies.split('; ').find(cookie => cookie.startsWith('jwt='));
    if (tokenCookie) {
      const token = tokenCookie.split('=')[1];
      try {
        const decoded = jwt.verify(token, secret);
        if (decoded.species === 'human') {
          // If the 'species' cookie is set to 'human', print the flag
          res.write('<h1>Flag: grepCTF{some_flag_here}</h1>');
          res.end();
          return;
        }
      } catch (err) {
        // Invalid token, do nothing and show the filler text
      }
    }
  }
  
  // If the 'species' cookie is not set to 'human' or the token is invalid, show the filler text
  res.write('<h1>Only humans can access the flag</h1>\n');
  res.write('<!-- secret: mysecretkey -->')
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
