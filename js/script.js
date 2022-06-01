 //validar campo nombre
 function validar_envio() {
 
    if ((document.fcontacto.nombre.value).length == 0) {
    alert("El campo Nombre no puede estar vacío")
    document.fcontacto.nombre.focus()
    return 0;}

    if ((document.fcontacto.apellido.value).length == 0) {
        alert("El campo Apellido no puede estar vacío")
        document.fcontacto.apellido.focus()
        return 0;}

    if (document.fcontacto.asuntos.selectedIndex == 0) {
        alert("Debe seleccionar un Asunto de contacto.")
        document.fcontacto.asuntos.focus()
        return 0;}

    if ((document.fcontacto.email.value).length == 0) {
        alert("El campo Email no puede estar vacío")
        document.fcontacto.email.focus()
        return 0;}
    

    if ((document.fcontacto.telefono.value).length == 0) {
        alert("El campo Teléfono no puede estar vacío")
        document.fcontacto.telefono.focus()
        return 0;
    }
    if  ((document.fcontacto.telefono.value).length !=10){
        alert("El campo Teléfono debe tener 10 digitos, Ingrese la caracteristica de área sin 0 y el numero sin 15 , ej: 011 1551234567 -> 1151234567")
        document.fcontacto.telefono.focus()
        return 0;
    }
    
    

    if ((document.fcontacto.comenta.value).length == 0) {
        alert("El campo consulta no puede estar vacío")
        document.fcontacto.comenta.focus()
        return 0;}

        //Envio de formulario
        alert("El formulario se envió correctamente. Muchas gracias");
        document.fcontacto.submit();

 }

 



