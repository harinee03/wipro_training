const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Store connected users
const users = new Map();

io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Handle user joining
    socket.on('join', (username) => {
        users.set(socket.id, username);
        io.emit('user-connected', {
            username,
            userId: socket.id,
            totalUsers: users.size
        });
        console.log(`${username} joined. Total users: ${users.size}`);
    });

    // Handle incoming messages
    socket.on('send-message', (data) => {
        const username = users.get(socket.id);
        io.emit('receive-message', {
            username: username || 'Anonymous',
            message: data.message,
            timestamp: new Date().toLocaleTimeString()
        });
    });

    // Handle typing indicator
    socket.on('typing', () => {
        const username = users.get(socket.id);
        socket.broadcast.emit('user-typing', username);
    });

    socket.on('stop-typing', () => {
        socket.broadcast.emit('user-stop-typing');
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        const username = users.get(socket.id);
        users.delete(socket.id);
        if (username) {
            io.emit('user-disconnected', {
                username,
                totalUsers: users.size
            });
            console.log(`${username} disconnected. Total users: ${users.size}`);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
