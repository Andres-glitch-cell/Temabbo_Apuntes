const http = require('http');

// Mapeo IP -> usuario
const ipToUser = {
  "100.125.75.100": "thetemporus-temabbo",
  "100.107.99.9": "andres-temabbo"
};

// Simulación permisos y tareas
const permisos = {
  "thetemporus-temabbo": ["lectura", "escritura"],
  "andres-temabbo": ["administrador", "lectura", "escritura"]
};

const tareas = {
  "thetemporus-temabbo": ["Revisar logs del servidor", "Actualizar base de datos"],
  "andres-temabbo": ["Revisar permisos", "Aprobar tareas pendientes"]
};

const server = http.createServer((req, res) => {
  // Obtener IP del cliente (considerando posibles proxies)
  const ip = req.socket.remoteAddress.replace(/^::ffff:/, '');

  const usuario = ipToUser[ip];
  const fecha = new Date();
  const fechaStr = fecha.toLocaleString();

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  if (!usuario) {
    res.end("IP no reconocida en la red Tailscale: " + ip);
    return;
  }

  // Construir mensaje
  let mensaje = `Bienvenido ${usuario} al Cliente Kali Linux (${fechaStr})\n\n`;

  mensaje += `Permisos:\n- ${permisos[usuario].join("\n- ")}\n\n`;
  mensaje += `Tareas extras:\n- ${tareas[usuario].join("\n- ")}\n`;

  res.end(mensaje);
});

server.listen(8000, () => {
  console.log('Servidor corriendo en http://localhost:8000');
});

