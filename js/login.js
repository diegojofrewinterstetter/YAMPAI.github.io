let usuarios = []
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