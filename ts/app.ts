import jquery from 'jquery';
import {validar, validarEnTiempoReal} from './validacion';
const $:JQueryStatic = jquery;

const form = document.getElementById('formulario');
const curso = $('input[name="curso"]');

curso.on('change', () => {
  if ($('#curso5').is(':checked')) 
    $('#otro').removeClass('d-none') 
  else
   $('#otro').addClass('d-none')
});


form?.addEventListener("submit", (event:any) =>  {
  if (validar() === 0) {
    $('.listo').removeClass('d-none');
    $('#formulario').remove();
  }

  validarEnTiempoReal();

  event.preventDefault();
});

