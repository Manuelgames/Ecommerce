const botonFormEnviar = document.querySelector('#login-form-buttom');
const inputCorreo = document.querySelector('#login-correo-input');
const inputPassword = document.querySelector('#login-password-input');
const parrafoValidacion = document.querySelector('.login-form-validacion');

console.log(botonFormEnviar);
console.log(inputCorreo);
console.log(inputPassword);
console.log(parrafoValidacion);


botonFormEnviar.addEventListener('click', iniciarSesion);


function iniciarSesion(){
    if(inputCorreo.value && inputPassword.value){
        if(inputCorreo.value == 'admin' && inputPassword.value == 'admin'){
            window.location.href = "http://127.0.0.1:5500/index.html";             
        }
        else{
            parrafoValidacion.innerHTML = 'Correo o contraseña incorrectos';            
        }
    }
    else{
        parrafoValidacion.innerHTML = 'Porfavor llena los campos solicitados';
    }
}