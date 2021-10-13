let registros = []

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
    
    function agregarRegistro(){
        if(validar_nombre_usuario() && validar_contrasena() && validar_edad_usuario()){
            let user = {
                usuario: document.getElementById("dato_nombre_usuario").value,
                edad: document.getElementById("dato_edad_usuario").value,
                contrasena: document.getElementById("dato_contrasena").value
            };
            registros.push(user);
            form_nuevo_usuario.reset();
            console.clear();
       /* for (var i=0; i<registros.length;i++){
            
            console.log("Posición "+i);
            console.log("{ Usuario: "+registros[i].usuario+" - Edad: "+registros[i].edad+" - Contraseña: "+registros[i].contrasena+" }\n");
        }
        */
        }
    }

    function OrdenarArreglo(arreglo){
        arreglo = registros;
        arreglo.sort(function(a,b) {
            if (a.edad > b.edad){
                return 1;
            }
            if (a.edad < b.edad){
                return -1;
            }
            return 0;

        })
        console.log(arreglo);
        return arreglo


    }

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;