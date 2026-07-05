$(document).ready(function () {
    $('#btnCancelar').click(function () {
        $('#formUsuario')[0].reset();
        $('.form-control').removeClass('is-invalid');
    });

    $('#formUsuario').submit(function (evento) {
        evento.preventDefault(); 

        let formularioValido = true;
        let nombre = $('#nombre').val().trim();
        if (nombre === '') {
            $('#nombre').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#nombre').removeClass('is-invalid');
        }

        let usuario = $('#usuario').val().trim();
        let regexUsuario = /^\S+$/; 
        if (usuario === '' || !regexUsuario.test(usuario)) {
            $('#usuario').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#usuario').removeClass('is-invalid');
        }

        let fecha = $('#fecha').val();
        if (fecha === '') {
            $('#fecha').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#fecha').removeClass('is-invalid');
        }
        let email = $('#email').val().trim();
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !regexEmail.test(email)) {
            $('#email').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Valida Sitio Web 
        let sitioWeb = $('#sitioWeb').val().trim();
        let regexWeb = /^(http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
        if (sitioWeb === '' || !regexWeb.test(sitioWeb)) {
            $('#sitioWeb').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#sitioWeb').removeClass('is-invalid');
        }

        if (formularioValido) {
            alert("¡Usuario guardado con éxito!");
            $('#formUsuario')[0].reset();
            $('.form-control').removeClass('is-invalid');

            window.location.href = 'index.html';
        }
    });

    // Quita la alerta roja en tiempo real cuando el usuario empieza a corregir el campo
    $('.form-control').on('input', function () {
        $(this).removeClass('is-invalid');
    });
});