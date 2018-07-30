let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {

    socket.on('disconnect', function () {
        io.emit('users-changed', { user: socket.nickname, event: 'left' });
    });

    socket.on('set-user', (user) => {
        socket.nickname = user.username;
        socket.avatar = user.avatar;
        io.emit('users-changed', { user: socket.nickname, event: 'joined' });
    });

    socket.on('add-message', (message) => {
        io.emit('message', { 
            text: message.text, 
            author: socket.nickname, 
            avatar: socket.avatar, 
            created: new Date() });
    });
});

var port = process.env.PORT || 3001;

http.listen(port, function () {
    console.log('listening in http://localhost:' + port);
});