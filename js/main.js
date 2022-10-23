document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarForm);
});

function validarForm(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        alert('Ingresa tu nombre');
        return;
    }

    let tel = document.getElementById('telefono').value;
    if (tel.length !== 10) {
        alert('El teléfono ingresado es inválido');
        return;
    }
    
    let emailValue = document.getElementById('email').value;
    let email = document.getElementById('email');
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailValue.length==0 || emailRegex.test(email)) {
        alert('El email es inválido');
        return;
    }


    document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });

    this.submit();
}
