const http = require("http");
const express = require("express");
const app = express();

const servidorHttp = http.createServer(app);
const io = require("socket.io")(servidorHttp);

io.addListener("connection", (socket) => {
  console.log("Usuario conectado");
  socket.addListener("nova mensagem", (msg) => {
    io.emit("nova mensagem", msg);
  });
});

app.use(express.static("public"));

servidorHttp.address('https://vercel.com/orlando-pagnanis-projects/chat_neto');
