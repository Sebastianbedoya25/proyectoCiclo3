let registros = []
let ordenado = []


function validar_nombre_usuario(string){

    var string = document.getElementById("dato_nombre_usuario").value;
    const buscar = /^([A-Z]{1}[a-z]+)((\s[A-Z]{1}[a-z]+)?)$/;
    
    if(buscar.test(string) == true){
        return true;
    }
    else{
        alert("Ingrese un nombre de usuario válido");
        return false;
    }     
}

function validar_contrasena(string){
    
    var string = document.getElementById("dato_contrasena").value;
    const patron = /^[A-Za-z0-9]+$/;
    
    if ((patron.test(string) == true) && (string!=null) && (string.length>=6) ) {
        return true;
    }else{
        alert("Ingrese una contraseña correcta");
        return false;
    }
}

function validar_edad_usuario(edad) {
    var edad = document.getElementById("dato_edad_usuario").value;
    var numeros = /^[0-9]+$/;
    if(numeros.test(edad) == true){
        if(edad > 13 && edad < 110) {
            return true;
            
        }
        else {
            alert("La edad debe estar entre 13 y 110 años")
            return false;
        }
    }
    else {
        alert("La edad debe ser numérica");
        return false;

    }
}

function agregarRegistro() {
if(validar_nombre_usuario() && validar_contrasena() && validar_edad_usuario()){
        let user = {
            usuario: document.getElementById("dato_nombre_usuario").value,
            edad: document.getElementById("dato_edad_usuario").value,
            contrasena: document.getElementById("dato_contrasena").value
        };
        registros.push(user);
        form_nuevo_usuario.reset();
}
}

document.write("Nombre: "+usuario)
document.write("Edad: "+edad)
document.write("Contraseña: "+contrasena)

function OrdenarArreglo(arreglo){ //Toma los elementos guardados en el array "registros"
    let aOrdenar = registros.user.edad();  //Toma la edad de todos los "users" guardados en "registros"
    let ordenado = aOrdenar((a,b) => {return a-b;}); //Ordena las edades y las guarda en en el arreglo "ordenado"
    ordenado.push();
    console.log(ordenado); //Imprime en consola el arreglo "ordenado"
}




module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;