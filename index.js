var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile( __dirname + '/index.html' );
});


io.on('connection', function(socket){
	console.log('Receiving a new connection');

	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
		console.log('message: '+msg);
	});

	socket.on('disconnect', function(){
		console.log('connection lost.');
	});
});

http.listen(3000, function(){
	console.log("Server listening on port 3000");
});
