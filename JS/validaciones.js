
    function validar_nombre_usuario() {

        var dato = document.getElementById("dato_nombre_usuario").value
        const buscar = /^([A-Z]{1}[a-z]+)((\s[A-Z]{1}[a-z]+)?)$/;
        
        if(buscar.test(dato) == true)
        {
            console.log(buscar.test(dato));
            alert("el dato es valido");
            return true;
        }
        else
         {
             console.log(buscar.test(dato));
             alert("El dato no es valido");
             return false;
         }     
         }







/*
var form = document.getElementsById('form_nuevo_usuario')
var expresiones = {usuario: /^([A-Z]+[a-z]+\s)+/  }

    form.addEventListener('sumbit', function(evt){
        evt.preventDefault();
        var mensajesError = [];
    
if(expresiones.value === expresiones){

    mensajesError.push('Ingresa tu contraseña');

}
    })*/