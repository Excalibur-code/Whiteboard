//simple server is created.All code inside express() is hidden and pre-made.
//api
const express = require('express');
const app = express();
//nodejs module
const httpServer = require('http').createServer(app);
//socket enabled server
const io = require('socket.io')(httpServer);

//important portion.-----------------------------------------------------
io.on("connection", function (socket) {
     console.log("New Client Connected");
     //console.log(socket.id);
     socket.on("color", function (color) {
         //console.log(data);
         socket.broadcast.emit('colorchange', color);//the color change is then broadcasted to all client
     })
     socket.on("md", function (point) {
         socket.broadcast.emit("onmd", point);
     })
     socket.on("mm", function (point) {
        socket.broadcast.emit("onmm", point);
    })
})
 app.get("/", function (req, res) {
      res.end("<h1>Welcome to the home page</h1>");///home is the route where information is.
 })

//connection


//to start a server.listen means which look for request 24hrs//3000 is a random number which identifies a server uniquely on a machine
let port = process.env.PORT || 3000;
httpServer.listen(port, function() {//if machine has posted many servers
    console.log("Server started at port 3000");
    //see TCP layer of computer network 
})