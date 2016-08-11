/*global __dirname, process*/
require('path');
require('hbs');
const express = require('@financial-times/n-express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

require('dotenv').config({silent: true});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.get('/', function (req, res) {
  res.render(__dirname + "/index", {"BASE_PATH_URL": process.env["BASE_PATH_URL"]});
});

let port = process.env.PORT || 5000;
let server = http.createServer(app);
server.listen(port, () => {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

module.exports = server;
