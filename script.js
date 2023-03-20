var valorEmDolar = prompt("Digite o valor em dolares que você possui: ");
var cotacaoDoDolar = 5.32;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("R$ " + valorEmReal);