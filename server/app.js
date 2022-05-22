const http = require('http');
const express = require("express");
const app = express();

// Socket.io 
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200"
  }
});

// Import Message model
const Message = require('./models/Message');

// Socket.io Chat Handler
const chatHandler = require('./services/chat.service');

// Routes Handler
const rootRouter = require('./routes/root.routes');

// Database Connection Handler
const connection = require("./models/db.js");

// API parsing
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

// PORT
const port = process.env.PORT || 3000;

// CORS: allow all origin and headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

// Routes
app.use('/', rootRouter);

// Socket.io on-connection and other event handlers
const onConnection = (socket) => {

  let id = socket.id;

  chatHandler(io, socket);
}

// Listen to Socket.io Connection
io.on('connection', onConnection);

// Start DB Connection
connection.startConnection();

// Listen on PORT
server.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});