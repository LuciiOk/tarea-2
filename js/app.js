var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "jquery", "./validacion"], function (require, exports, jquery_1, validacion_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    var $ = jquery_1.default;
    var form = document.getElementById('formulario');
    var curso = $('input[name="curso"]');
    curso.on('change', function () {
        return ($('#curso5').is(':checked')) ? $('#otro').removeClass('d-none') : $('#otro').addClass('d-none');
    });
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
        if (validacion_1.validar() === 0) {
            $('.listo').removeClass('d-none');
            $('#formulario').addClass('d-none');
        }
        validacion_1.validarEnTiempoReal();
        event.preventDefault();
    });
});
