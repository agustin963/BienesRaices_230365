import express from 'express';
//import generalRouters from './routes/generalRouters.js'
//import userRouters from './routes/userRouters.js'

const app = express();
// configuramos nuestro servidor web

const port = 3000;
app.listen(port , ()=> {
    console.log(`La aplicacion ha iniciado en el puerto : ${port}`);
});

//Routing - ENRUTAMIENTO.
//app.use('/',generalRouters);
//app.use('/usuario/',userRouters);
//Probamos las rutas para poder presentar mensajes al usuario a traes del navegador