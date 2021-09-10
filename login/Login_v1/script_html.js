function _iniciarSesion(usuario, password) {
    let usuarioLogueado = iniciarSesion(usuario, password);

    if (usuarioLogueado == undefined) {
        document.getElementById('mensaje').innerHTML = 'Usuario y/o contraseña no válido';
        
    } else if(usuarioLogueado.nombreUsuario === 'admin'&& usuarioLogueado.password ==='1234'){
       
        window.location = "file:///C:/Users/Leo/Desktop/Proyecto%20FUNDAMENTOS/Crud/index.html";
    }   else {
        window.location = "file:///C:/Users/Leo/Desktop/Proyecto%20FUNDAMENTOS/PRINCIPAL/index.html";
    }
    
}