const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

io.on('connection', (socket) => {
    console.log('a user connected');
  });

http.listen(4000, function() {
  console.log('listening on *:4000');
});