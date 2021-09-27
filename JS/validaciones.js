function validar_nombre_usuario(string){

    var string = document.getElementById("dato_nombre_usuario").value
    const buscar = /^([A-Z]{1}[a-z]+)((\s[A-Z]{1}[a-z]+)?)$/;
    
    if(buscar.test(string) == true){
        console.log(buscar.test(string));
        alert("Usuario válido");
        return true;
    }
    else{
         console.log(buscar.test(string));
         alert("El usuario no es válido");
         return false;
    }     
}

function validar_contrasena(string){
    
    var string = document.getElementById("dato_contrasena").value;
    const patron = /^[A-Za-z0-9]+$/;
    
    if ((patron.test(string) == true) && (string!=null) && (string.length>=6) ) {
        alert("Contraseña correcta");
        console.log("Contraseña correcta");
        return true;
    }else{
        console.log("Contraseña incorrecta");
        alert("Contraseña incorrecta");
        return false;
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;