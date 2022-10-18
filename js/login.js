// class Usuario {
//     constructor(nombre, apellido, correo, contrasena) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.correo = correo
//         this.contrasena = contrasena

//     }
// }

// let usuarios = []
// usuarios.push(7489, "ahm")
// // usuarios.push(1234,"die")
// // usuarios.push(74123, "1234")
let vista = document.querySelectorAll('#ver')
let submitLogin = document.querySelector("#enviar")
submitLogin.addEventListener("click", login)

function login(event) {

    event.preventDefault();
    console.log(event);

    let formLogin = document.querySelector("#formulario")
    
    let traer_ls = JSON.parse(localStorage.getItem("usuario"))
        traer_ls.forEach(e => {
                if (formLogin[0].value == e.correo && formLogin[1].value == e.contrasena) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Has ingresado con éxito! Volverás al inicio.   ',
                        showConfirmButton: false,
                        timer: 5000
                    })
                    setTimeout(function () { window.location.href = "../index.html"; }, 3000);
                    vista.forEach(e =>{
                    e.id = 'nover'
                    })
                    
                }else{  
                    Swal.fire({
                        icon: 'warning',
                        title: '¡Las credenciales no coinciden! ',
                        showConfirmButton: true,
                    })
                }
            })
        


    






    // if (usuarios.indexOf(correo) && usuarios.indexOf(password)) {
    //     pinDB = pine
    //     passwordDB = password
    // }

    // if (usuarios.includes(pinDB) || usuarios.includes(passwordDB)) {
    //     if (pinDB.trim() && passwordDB.trim()) Swal.fire('Ha ingresado con éxito!', '', 'success')
    //     else Swal.fire('Credenciales incorrectas', '', 'info')

    // } else Swal.fire('Credenciales incorrectas', '', 'info')



}
