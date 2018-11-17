const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const port = 3000;

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(__dirname + '/views/chat.pug');
});

let users = 0;

io.on('connection', (socket) => {
    users++;
    console.log('client connect');

    socket.on('input value', (value) => {
        io.sockets.emit('input value', value);
    });

    socket.on('disconnect', () => {
        console.log('disconnect');
    });
});

http.listen(port, () => {
    console.log(`Started listen port ${port}`);
});