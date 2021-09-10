function iniciarSesion(usuario, clave) {
    let usuarioEncontrado =
        usuarios.find(objeto => objeto.nombreUsuario == usuario && objeto.password == clave);

    return usuarioEncontrado;
}

var usuarios = [
    { nombreUsuario: 'admin',  password: '1234' },
    { nombreUsuario: 'leo', password: '12345' },
   
];

