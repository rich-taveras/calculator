$(document).ready(function() {
    var operando1 = '';
    var operando2 = '';
    var operador = '';
  
    $('.numero').click(function() {
      var numero = $(this).text();
      if (operador === '') {
        operando1 += numero;
      } else {
        operando2 += numero;
      }
      $('#resultado').val(numero);
    });
  
    $('.operador').click(function() {
      operador = $(this).text();
    });
  
    $('#igual').click(function() {
      var resultado;
      switch (operador) {
        case '+':
          resultado = parseInt(operando1) + parseInt(operando2);
          break;
        case '-':
          resultado = parseInt(operando1) - parseInt(operando2);
          break;
        case '*':
          resultado = parseInt(operando1) * parseInt(operando2);
          break;
        case '/':
          resultado = parseInt(operando1) / parseInt(operando2);
          break;
      }
      $('#resultado').val(resultado);
    });
  
    $('#limpiar').click(function() {
      operando1 = '';
      operando2 = '';
      operador = '';
      $('#resultado').val('');
    });
  });
  