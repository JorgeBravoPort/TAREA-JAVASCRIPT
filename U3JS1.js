prompt('Ingresa el numero de metros que vas a recorrer:', '');

var transportes = [pie, bicicleta, colectivo, auto, avion];

var transportes = prompt('Ingresa el numero de metros que vas a recorrer:', '');

If(transportes <= 1000)
{
    alert("Tu transporte adecuado es pie");
}  else if (transportes <= 10000) {
    alert("Tu transporte adecuado es bicicleta");
} else if (transportes <= 30000) {
    alert("Tu transporte adecuado es colectivo");
} else if (transportes <= 1000000) {
    alert("Tu transporte adecuado es auto");
} else if (transportes <= 1000000) {
    _alert("Tu transporte adecuado es avion");
}