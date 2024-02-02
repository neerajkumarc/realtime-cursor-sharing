const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const PORT = process.env.PORT | 3001
const app = express()
const server = http.createServer(app)
const io = new socketio.Server(server)

app.use(express.static("public"))

server.listen(PORT,()=>{
    console.log("server started...")
})