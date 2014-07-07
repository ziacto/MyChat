// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Framework7.$;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

var socket = io.connect('http://109.193.23.180:3000');
socket.emit("registerDevice", {username: "tim"});
socket.on("registerDeviceResponse", function(data) {
	alert(data);
});


socket.on('newMessages', function(msg) {
	alert(msg.value);
	$('#toDoText').html("de"+msg);
});

$('.sendMsg').click(function() {
	var text = $('#msg').val();
	
	socket.emit('sendMessage', {receiverUsername: "daniel", msg: text});
	socket.on('sendMessageResponse', function (data) {
		$('#toDoText').html("de"+data.result);
	});
});
	
