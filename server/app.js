const express = require("express");
const rootRouter = require('./routes/root.routes');
const connection = require("./models/db.js");

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

const app = express();
const port = process.env.PORT || 3000;

// CORS: allow all origin and headers
app.use(function(req, res, next) {
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

// Start DB Connection
connection.startConnection();

// Listen to Server Connection
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});