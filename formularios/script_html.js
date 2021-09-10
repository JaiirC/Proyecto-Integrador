function crearUsuario(nick, correo, pass){
    const usuario =
    {
        nick:nick, 
        correo:correo,
        pass:pass,
        
    };         
    agregarUsuario(usuario);
    }