const express = require('express')
const { chats } = require('./data/data')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.send("API is running successfully")
});

app.get('/api/chat', (req, res) => {
    res.send(chats)
});

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat)
});

const Port = process.env.PORT || 5000
app.listen(Port, console.log(`Server Started Listening on port ${Port}`))