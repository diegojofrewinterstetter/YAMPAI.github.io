id = 1
class Usuario {
    constructor(nombre, apellido, correo, contrasena) {
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.contrasena = contrasena
        this.id = id++
    }
}
  

let usuarios = []

let submitRegister = document.querySelector("#submitRegister")
submitRegister.addEventListener("click", registrarUsuario)

function registrarUsuario(event) {

    event.preventDefault();

    let formRegister = document.querySelector("#formulario")

    let nombre = formRegister[0].value
    let apellido = formRegister[1].value
    let correo = formRegister[2].value
    let contraseñax = formRegister[3].value
    let contraseñas = formRegister[4].value
    let b = false

    if (formRegister[0].value == null || formRegister[0].value.length == 0) {
        alert('¡El nombre no puede estar vacío!')
    }
    if (formRegister[1].value == null || formRegister[1].value.length == 0) {
        alert('¡El apellido no puede estar vacío!')
    }
    if (formRegister[2].value == null|| formRegister[2].value.length == 0) {
        alert('¡El correo no puede estar vacío!')
    }
    if (formRegister[3].value == null || formRegister[3].value.length == 0) {
        
        alert('¡La contraseña debe contener al menos 8 caracteres y no puede estar vacía!')
    }
    if (formRegister[4].value == null || formRegister[4].value.length == 0) {
       alert('¡Repita su contraseña!')
    }

    do {

        if (contraseñax == contraseñas) {

            b = true

        } else {

            Swal.fire({
                icon: 'warning',
                title: '¡Las Contraseñas no coinciden! ',
                showConfirmButton: true,
            })
            b = true

        }

    } while (b != true);



    if (formRegister[3].value.length >=8) {
        if (contraseñax == contraseñas || !formRegister[3].value == null || !formRegister[4].value == null) {

            usuarios.push(new Usuario(nombre, apellido, correo, contraseñas))
            localStorage.setItem("usuario", JSON.stringify(usuarios));
            Swal.fire({
                icon: 'success',
                title: '¡Te has registrado con éxito! Volverás al inicio.   ',
                showConfirmButton: false,
                timer: 5000
            })
            setTimeout(function () { window.location.href = "../index.html"; }, 3000);
    
        }
        
    }else{
        Swal.fire({
            icon: 'warning',
            title: '¡La contraseña debe tener al menos 8 caracteres!',
            showConfirmButton: true,
        })
    }
    


}

