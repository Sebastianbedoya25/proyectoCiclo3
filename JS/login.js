user = {
    usuario: "Sebastian",
    edad: 24,
    contrasena: "Sebastian25"
};

user1 = {
    usuario: "Santiago",
    edad: 30,
    contrasena: "Santiago30"
};

let registros = [];
registros.push(user);
registros.push(user1);

function validar_captcha(rcaptcha){
    let estado = false;

    if((rcaptcha.toUpperCase() == "BOGOTA") || (rcaptcha.toUpperCase() == "BOGOTÁ")){
        estado = true;
    }
    
    return estado;
}

function iniciar_sesion(usuario, contrasena, rcaptcha){
    /*var registros1 = require('./validaciones');
    registros = registros1.registros;*/
    let inicioDeSesion = false;

    usuario = document.getElementById("in_login_username").value;
    contrasena = document.getElementById("in_login_password").value;
    rcaptcha = document.getElementById("in_login_captcha").value;
    let captcha = validar_captcha(rcaptcha);
    
    for(var i=0; i<registros.length;i++){
        if((registros[i].usuario == usuario)&&(registros[i].contrasena == contrasena) && (captcha)){
            inicioDeSesion = true;
            alert("Inicio de sesión exitoso");
            break;
        }
    }
    console.log("Usuario: ", document.getElementById("in_login_username").value+"\n"+
    "Contraseña: ", document.getElementById("in_login_password").value);
    console.log("Estado: ", inicioDeSesion);
    alert("Wait");
    return inicioDeSesion;
}

module.exports.registros = registros;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.validar_captcha = iniciar_sesion;