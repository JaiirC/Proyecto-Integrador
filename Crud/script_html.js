

function crearUsuario(cedulaNueva, nombreNuevo, apellidoNuevo){
    const usuario =
    {
        cedula:cedulaNueva, 
        nombre:nombreNuevo,
        apellido:apellidoNuevo
    };         
    agregarUsuario(usuario);
    listarUsuariosTabla();
    document.getElementById('cedula').value='';
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
}

function actualizarUsuario(cedulaModificada, nombreModificado, apellidoModificado) {

    const usuario =
    {
        cedula: cedulaModificada,
        nombre: nombreModificado,
        apellido: apellidoModificado,
        
    };

    modificar(cedulaModificada, usuario);
    listarUsuariosTabla();
    document.getElementById('cedula').value='';
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
}



function listarUsuariosTabla() {
    recuperarUsuarios();
    document.getElementById('listaUsuariosTabla').innerHTML = '';

    for (var i = 0; i < usuarios.length; i++) {
        document.getElementById('listaUsuariosTabla').innerHTML +=
            `    
                <tr>
                    <td class="table-danger">
                        ${usuarios[i].cedula}
                    </td>
                    <td  class="table-warning">
                        ${usuarios[i].nombre}
                    </td>
                    <td class="table-light">
                        ${usuarios[i].apellido}
                    </td>
                    
                    <td class="table-primary">
                        <button class="btn btn-warning" onclick="editar('${usuarios[i].cedula}','${usuarios[i].nombre}','${usuarios[i].apellido}')">Editar
                        <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-danger" onclick="borrar('${usuarios[i].cedula}')">Eliminar</button>
                    </td>
                    
                </tr>
        `
    }
}

function editar(cedula, nombre, apellido) {
    document.getElementById('cedula').value = cedula;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
   
}

function borrar(cedula){
    eliminar(cedula);
    listarUsuariosTabla();
}

listarUsuariosTabla();