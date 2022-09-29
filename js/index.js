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
    
    let formRegister = document.getElementsByClassName("register")
    console.dir(formRegister)
    
    let nombre = formRegister.getElementsById("#input0").value
    let apellido = formRegister.getElementsById("#input1").value
    let correo = formRegister.getElementsById("#input2").value
    let contraseñax = formRegister.getElementsById("#input3").value
    let contraseñas = formRegister.getElementsById("#input4").value
    let b = false
    
    do {
        
        console.log("entre")
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
        console.log("entre")
        formRegister.className = "oculto"
        let visibleh2 = document.querySelector("#registerh2")
        visibleh2.className = "oculto"
    }
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

function login(event) {
    
    event.preventDefault();
    console.log(event);
    
    let formLogin = document.querySelector("#formulario")
    console.dir(formLogin)
    
    let pine = formLogin[0].value
    let password = formLogin[1].value
    let pinDB = " "
    let passwordDB = " "
    let k = 0
    console.log(usuarios)
    
    if (usuarios.indexOf(pine) && usuarios.indexOf(password)) {
        pinDB = pine
        passwordDB = password
    }
    
    if (usuarios.includes(pinDB) || usuarios.includes(passwordDB)) {
        if (pinDB.trim() && passwordDB.trim()) Swal.fire('Ha ingresado con éxito!', '', 'success')
        else Swal.fire('Credenciales incorrectas', '', 'info')
        
    }else Swal.fire('Credenciales incorrectas', '', 'info')
    
    
    
}

let submitLogin = document.querySelector("#enviar")
submitLogin.addEventListener("click", login)

// let ver = document.querySelector("#ver")
// ver.addEventListener("click", mostrarUsuarios)
// function mostrarUsuarios(event) {
    
    //     event.preventDefault()
    
    //     usuarios.forEach((a) => {
        
        
//         console.log(a)
//     })



// }