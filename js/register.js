class Usuario {
    constructor(nombre, apellido, correo, contrasena) {
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.contrasena = contrasena

    }
}

let usuarios = []
// usuarios.push(7489, "ahm")
// usuarios.push(1234,"die")
// usuarios.push(74123, "1234")

let submitRegister = document.querySelector("#submitRegister")
submitRegister.addEventListener("click", registrarUsuario)

function registrarUsuario(event) {
    
    sessionStorage.removeItem(1)
    
    event.preventDefault();
    console.log(event);
    
    let formRegister = document.querySelector("#formulario")
    console.dir(formRegister)
    
    let nombre = formRegister[0].value
    let apellido = formRegister[1].value
    let correo = formRegister[2].value
    let contraseñax = formRegister[3].value
    let contraseñas = formRegister[4].value
    let b = false
    
    do {
        
        (contraseñax == contraseñas) ? b = true : alert("Los valores no coinciden. Intente nuevamente2"), b = true
        
    } while (b != true);

    console.log(contraseñas)
    console.log(contraseñax)
    
    
    if ( contraseñax == contraseñas) {
        
        usuarios.push(new Usuario(nombre, apellido, correo, contraseñas))
        
    }

    const token = generarToken(nombre, contraseñax)
    sessionStorage.setItem("token", token)

    const autenticado = existToken()
    if (autenticado && contraseñax == contraseñas) {
        Swal.fire({
            icon: 'success',
            title: '¡Te has registrado con éxito! Volverás al inicio.   ',
            showConfirmButton: false,
            timer: 5000
          })
          setTimeout( function() { window.location.href = "../index.html"; }, 3000 );
        
    }

    console.log(usuarios)

}


function generarToken(nombre, contrasena) {
    return nombre + contrasena
}

function existToken() {
    if (sessionStorage.getItem("token") !== null) {
        return true
    } else {
        return false
    }
}

