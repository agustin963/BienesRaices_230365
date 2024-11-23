import express from 'express';
import generalRouters from './routes/generalRouters.js'
import userRouters from './routes/userRouters.js'
import db from './db/config.js'
const app = express();

//Habilitar lectura de datos formularios 
app.use(express.urlencoded({extended:true}))


// configuramos nuestro servidor web



// Habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')
// Carpeta publica 
app.use(express.static('public'))
//Conexion a la base de datos 
try{
   await db.authenticate();
   db.sync()
   console.log('Conexion correcta a la Base de Datos')
}catch(error){
    console.log(error)

}

const port = 3000;
app.listen(port , ()=> {
    console.log(`La aplicacion ha iniciado en el puerto : ${port}`);
});

//Routing - ENRUTAMIENTO.
//app.use('/',generalRouters);
//app.use('/usuario/',userRouters);
//Probamos las rutas para poder presentar mensajes al us

//Routing - Enrutamiento.
app.use('/',generalRouters);
app.use('/auth',userRouters);
