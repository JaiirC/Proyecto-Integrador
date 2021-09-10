var usuarios = [

];

function agregarUsuario(usuario){
        var user = encontrarUsuario(usuario);
        console.log(user)
        if( user == undefined){
            usuarios.push(usuario);
            guardarStorage();
            recuperarUsuarios();
            alert('Felicidades te has registrado REDIRECCIONANDO...')
            window.location = "file:///C:/Users/Leo/Desktop/Proyecto%20FUNDAMENTOS/login/Login_v1/index.html";
        }else{
            alert('El correo  y nick ya existen')
        }
    }
    
function encontrarUsuario(usuario){
        var usuarioEncontrado = usuarios.find(objeto => objeto.correo == usuario.correo && objeto.nick === usuario.nick);
        return usuarioEncontrado;
    }
    
function guardarStorage() {
        localStorage.setItem('usuariosNuevos', JSON.stringify(usuarios));
    }
    

    function recuperarUsuarios() {
        usuarios = JSON.parse(localStorage.getItem('usuariosNuevos'));
    }
    
    