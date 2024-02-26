require('dotenv').config(); // Lee y guarda cada linea como varibale de entorno
const express = require('express'); // Importa el modulo express en la api

const app = express(); // Crea una instancia para manejar rutas y  funciones en el servidor
app.use(routes);// Usa las rutas de routes.js


let port = process.env.PORT || 3000; // Toma el puerto asignado en la variable de entorno y si no hay da  el 3000

//Connect to Database
    app.listen(port, () =>{
        if(process.env.NODE_ENV === 'dev'){ // Verifica el entorno en el que esta
        console.log('App is running in port ' + port);
        }else{
            console.log('App is running')
        }
    })



