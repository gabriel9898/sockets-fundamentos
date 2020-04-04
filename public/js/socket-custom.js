var socket = io();

// escuchar (on)
socket.on('connect', function () {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Perdimos conexion con el servidor');
});

// Enviar Informacion (emit)
socket.emit(
  'enviarMensaje',
  {
    usuario: 'Gabriel',
    mensaje: 'Hola mundo',
  },
  function (resp) {
    console.log('Respuesta server: ', resp);
  }
);

//escuchar
socket.on('enviarMensaje', function (mensaje) {
  console.log('Servidor:', mensaje);
});
