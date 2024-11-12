const formularioLogin = (request, response) =>  {
    response.render('auth/login', {
        page : "Ingresa a la plataforma"
        
    })};

const formularioRegister = (request, response) =>  {
        response.render('auth/createAccount', {
             page : "Crea una nueva cuenta..."
        })};

const Register = (req,res) => {
       console.log('Registrando....')
}

const formularioPasswordRecovery = (request, response) =>  {
    response.render('auth/passwordRecovery', {
            page : "Recupera tu Contraseña"
     })};
     
export {formularioLogin, formularioRegister, formularioPasswordRecovery,Register}