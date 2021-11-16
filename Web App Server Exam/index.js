const express = require('express');
const server = require('./server');
const config = require('./config/config');

const port = process.env.WEB_PORT || 3000;

var app = express();

require('./config/express')(app, config);

require('http').createServer(app).listen(config.port, function () {
    console.log("HTTP Server listening on port: ", config.port);
});

server.create()
.then(app => {
    app.listen(port, () => {
        console.log(`Server has started on port ${port}!`);
    }); 
}).catch(err => console.log(err));

var config = {
    rootPath: path.normalize(__dirname + '/..'),
    app: { name: ' Web App Server Exam' },
    port: 3000,
    dbURL: "mongodb+srv:..."
};


