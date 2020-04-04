const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Usuario Conectado');

  client.emit('enviarMensaje', {
    usuario: 'Administrados',
    mensaje: 'Bienvenido a esta aplicacion',
  });

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // Escuhar el cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    // broadcast es enviar mensaje a todo el mundo
    client.broadcast.emit('enviarMensaje', data);
    // if (data.usuario) {
    //   callback({
    //     resp: 'Todo salio bien',
    //   });
    // } else {
    //   callback({
    //     resp: 'Todo salio mal',
    //   });
    // }
  });
});
