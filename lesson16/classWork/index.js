const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});

let users = 0;

io.on('connection' , function (socket) {

    users++;
    console.log(users);
   // console.log(socket.description);
   console.log('client connect');



    socket.on('input value', function (value) {
        // socket.broadcast.emit('input value', value);
        io.sockets.emit('input value', value);
    });

    socket.on('disconnect', function () {
        console.log('disconnect')
    })
});

http.listen(port, function () {
    console.log('start listen ' + port)
});