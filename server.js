// --- ------------------------------------------------------------------------------------------------------------- ---
// --- Base Libs
// --- ------------------------------------------------------------------------------------------------------------- ---
var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// --- ------------------------------------------------------------------------------------------------------------- ---
// --- Extra Libs
// --- ------------------------------------------------------------------------------------------------------------- ---
var rn = require('random-number').generator({min:10000, max:99999, integer: true});
var moment = require('moment');
// --- ------------------------------------------------------------------------------------------------------------- ---
// --- Express Settings
// --- ------------------------------------------------------------------------------------------------------------- ---
app.use(express.static(path.join(__dirname + '/public')));
http.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var addr = http.address();
    console.log("Our server is listening at", addr.address + ":" + addr.port + ' - ' +  moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
});
// --- ------------------------------------------------------------------------------------------------------------- ---
// --- Express Settings
// --- ------------------------------------------------------------------------------------------------------------- ---
io.on('connection', function (socket) {
    console.log('a user connected - ' +  moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});