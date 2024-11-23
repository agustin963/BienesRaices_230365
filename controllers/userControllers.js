
import { request,response } from 'express';
import{check,validationResult} from 'express-validator'
import User from '../models/User.js'


const formularioLogin = (request, response) =>  {
    response.render('auth/login', {
        page : "Ingresa a la plataforma"
        
    })};

const formularioRegister = (request, response) =>  {
        response.render('auth/createAccount', {
             page : "Crea una nueva cuenta..."
        })};



const formularioPasswordRecovery = (request, response) =>  {
    response.render('auth/passwordRecovery', {
            page : "Recupera tu Contraseña"
     })};

const CreateNewUser = async (request,response) => {
       // Desestructurar los parámetros del request
    const { nombre_usuario, correo_usuario, password_usuario } = request.body;

    // Verificar que el usuario no existe previamente en la bd
    const existingUser = await User.findOne({ where: { email: correo_usuario } });

    if (existingUser) {
        return response.render("auth/createAccount", {
            page: "Error al intentar crear la cuenta de Usuario",
            errors: [{ msg: `El usuario ${correo_usuario} ya se encuentra registrado` }],
            user: { name: nombre_usuario }  // Use nombre_usuario here
        });
    }

    console.log("Registrando a un nuevo usuario.");
    console.log(request.body);

    // Validación de los campos que se reciben del formulario
    await check('nombre_usuario')
        .notEmpty().withMessage("El nombre del usuario es un campo obligatorio.")
        .run(request);
    await check('correo_usuario')
        .notEmpty().withMessage("El correo electrónico es un campo obligatorio.")
        .isEmail().withMessage("Debe ingresar un correo electrónico válido.")
        .run(request);
    await check('password_usuario')
        .notEmpty().withMessage("La contraseña es un campo obligatorio.")
        .isLength({ min: 8 }).withMessage("La contraseña debe ser de al menos 8 caracteres.")
        .run(request);
    await check('password2_usuario')
        .equals(request.body.password_usuario).withMessage("La contraseña y su confirmación deben coincidir.")
        .run(request);

    let result = validationResult(request);

    // Verificación si hay errores de validaciones
    if (!result.isEmpty()) {
        return response.render("auth/createAccount", {
            page: 'Error al intentar crear la Cuenta de Usuario',
            errors: result.array()
        });
    } else {
        console.log("Registrando a nuevo usuario");
        console.log(request.body);
    }

    // Registro a los datos en la base de datos.
    const newUser = await User.create({
        name: nombre_usuario,  // Use nombre_usuario here
        email: correo_usuario,
        password: password_usuario,
        token: generatetId()   // Generate token here
    });


  }
        
 
     
export {formularioLogin, formularioRegister, formularioPasswordRecovery,CreateNewUser}