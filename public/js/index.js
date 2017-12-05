var socket = io();
socket.on('connect', () => {
  console.log('Connected to server!');
  socket.emit('createMessage', {
    from: 'Greg',
    text: 'works for me!'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(msg){
  console.log('new message: ', msg);
});
