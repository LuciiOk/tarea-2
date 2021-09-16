define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validarEnTiempoReal = exports.validar = void 0;
    function validar() {
        var validado = 0;
        validado += (validaCheckCursos() === false) ? 1 : 0;
        validado += (validaCheckLenguajes() === false) ? 1 : 0;
        validado += (validarNivelProgramacio() === false) ? 1 : 0;
        validado += (validarEmail() === false) ? 1 : 0;
        validado += (validarRut() === false) ? 1 : 0;
        validado += (validarNumero() === false) ? 1 : 0;
        validado += (validarNombre() === false) ? 1 : 0;
        validado += (validarOpinion() === false) ? 1 : 0;
        return validado;
    }
    exports.validar = validar;
    function validarEnTiempoReal() {
        $('input[name="curso"]')
            .on('change', validaCheckCursos);
        $('input[name="lenguajes"]')
            .on('change', validaCheckLenguajes);
        $('input[name="nivel"]')
            .on('change', validarNivelProgramacio);
        $('#nombre-completo')
            .on('change', validarNombre);
        $('#nombre-completo')
            .keyup(validarNombre);
        $('#email')
            .on('change', validarEmail);
        $('#email')
            .keyup(validarEmail);
        $('#telefono')
            .keyup(validarNumero);
        $('#rut')
            .on('change', validarRut);
        $('#rut')
            .keyup(validarRut);
        $('#opinion')
            .on('change', validarOpinion);
        $('#opinion')
            .keyup(validarOpinion);
    }
    exports.validarEnTiempoReal = validarEnTiempoReal;
    function validaCheckCursos() {
        if ($('input[name="curso"]:checked').length !== 0) {
            $('input[name="curso"]').each(function (indice, elementa) {
                $(elementa).removeClass('is-invalid');
                $(elementa).addClass('is-valid');
            });
            return true;
        }
        $('input[name="curso"]').each(function (indice, elementa) {
            $(elementa).removeClass('is-valid');
            $(elementa).addClass('is-invalid');
        });
        return false;
    }
    function validaCheckLenguajes() {
        if ($('input[name="lenguajes"]:checked').length === 0) {
            $('input[name="lenguajes"]').each(function (indice, elementa) {
                $(elementa).removeClass('is-valid');
                $(elementa).addClass('is-invalid');
            });
            return false;
        }
        $('input[name="lenguajes"]').each(function (indice, elementa) {
            $(elementa).removeClass('is-invalid');
            $(elementa).addClass('is-valid');
        });
        return true;
    }
    function validarNivelProgramacio() {
        if ($('input[name="nivel"]:checked').length !== 1) {
            $('input[name="nivel"]').each(function (indice, elementa) {
                $(elementa).removeClass('is-valid');
                $(elementa).addClass('is-invalid');
            });
            return false;
        }
        $('input[name="nivel"]').each(function (indice, elementa) {
            $(elementa).removeClass('is-invalid');
            $(elementa).addClass('is-valid');
        });
        return true;
    }
    function validarNumero() {
        var numero = $('#telefono').val();
        if (isNaN(numero) || (numero === null || numero === void 0 ? void 0 : numero.toString().length) !== 9) {
            $('#telefono').removeClass('is-valid');
            $('#telefono').addClass('is-invalid');
            return false;
        }
        $('#telefono').removeClass('is-invalid');
        $('#telefono').addClass('is-valid');
        return true;
    }
    function validarRut() {
        var _a;
        var re = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
        var rut = (_a = $('#rut').val()) === null || _a === void 0 ? void 0 : _a.toString();
        if (!re.test(rut || '')) {
            $('#rut').removeClass('is-valid');
            $('#rut').addClass('is-invalid');
            return false;
        }
        $('#rut').removeClass('is-invalid');
        $('#rut').addClass('is-valid');
        return true;
    }
    function validarEmail() {
        var _a;
        var re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        var email = (_a = $('#email').val()) === null || _a === void 0 ? void 0 : _a.toString();
        if (!re.test(email || '')) {
            $('#email').removeClass('is-valid');
            $('#email').addClass('is-invalid');
            return false;
        }
        $('#email').removeClass('is-invalid');
        $('#email').addClass('is-valid');
        return true;
    }
    function validarNombre() {
        if ($('#nombre-completo').val() === '') {
            $('#nombre-completo').removeClass('is-valid');
            $('#nombre-completo').addClass('is-invalid');
            return false;
        }
        $('#nombre-completo').removeClass('is-invalid');
        $('#nombre-completo').addClass('is-valid');
        return true;
    }
    function validarOpinion() {
        var opinion = $('#opinion').val();
        if (opinion === '' || opinion.length > 500) {
            $('#opinion').removeClass('is-valid');
            $('#opinion').addClass('is-invalid');
            return false;
        }
        $('#opinion').removeClass('is-invalid');
        $('#opinion').addClass('is-valid');
        return true;
    }
});
