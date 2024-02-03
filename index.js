const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const PORT = process.env.PORT | 3001
const app = express()
const server = http.createServer(app)
const io = new socketio.Server(server)

app.use(express.static("public"))

io.on("connection",(socket)=>{
    console.log("a user connected!", socket.id)
    socket.on("playerMove",({x,y})=>{
        if (Number.isNaN(x) || Number.isNaN(y)) return;
        io.emit("playerPosition",{id:socket.id,x,y})
    })
})

server.listen(PORT,()=>{
    console.log("server started...")
})