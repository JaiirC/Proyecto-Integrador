

var usuarios = [];


function agregarUsuario(usuario){
    var user = encontrarUsuario(usuario);
    console.log(user)
    if( user == undefined){
        usuarios.push(usuario);
        guardarStorage();
    }else{
        alert('El usuario ya existe')
    }
}

function modificar(cedula, usuario) {
    const indice = usuarios.findIndex(usuario => usuario.cedula == cedula);
    if (indice > -1) {
        usuarios[indice] = usuario;
    }else{
        alert('no se encontró el registro');
    }
    guardarStorage();
}

function encontrarUsuario(usuario){
    var usuarioEncontrado = usuarios.find(objeto => objeto.cedula == usuario.cedula);
    return usuarioEncontrado;
}

function eliminar(cedula, usuario){
    const indice = usuarios.findIndex(usuario => usuario.cedula == cedula); 
    usuarios[indice] = usuario;
    usuarios.splice(indice,1);
    guardarStorage();  
}

function guardarStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function recuperarUsuarios() {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

