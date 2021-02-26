// This is a JavaScript file

$(document).on("click","#somar",function(){
  var valor1 = parseFloat($("#valor1").val());
  var valor2 = parseFloat($("#valor2").val());

  var resultado = valor1 + valor2;

  $("#resultado").val(resultado);
});

$(document).on("click","#subtrair",function(){
  var valor1 = parseFloat($("#valor1").val());
  var valor2 = parseFloat($("#valor2").val());

  var resultado = valor1 - valor2;

  $("#resultado").val(resultado);
});

$(document).on("click","#dividir",function(){
  var valor1 = parseFloat($("#valor1").val());
  var valor2 = parseFloat($("#valor2").val());

  var resultado = valor1 / valor2;

  $("#resultado").val(resultado);
});

$(document).on("click","#multiplicar",function(){
  var valor1 = parseFloat($("#valor1").val());
  var valor2 = parseFloat($("#valor2").val());

  var resultado = valor1 * valor2;

  $("#resultado").val(resultado);
});