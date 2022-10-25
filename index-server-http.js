//servidor creado con el modulo http

const http = require("http"); //importamos el modulo http que permite crear un servidor  y la almacenamos en una constante
const fs = require("fs");

const server = http.createServer((req, res) => {
  //se almacena en una constante
  const read = fs.createReadStream("./static/index.html"); //node lee el archivo antes de pasar al cliente
  read.pipe(res); //node a traves del método 'pipe ' pasa el archivo previmente indicado, al cliente
});

server.listen(4000);//se coloca el numero de puerto en el cual el servidor estara a ala escucha 

console.log(`'server on port ${4000}'`); //se establece un console.log para recibir un feedback de la ejecución
