var n = 7549;

var u = n % 10;
var z = parseint(n / 10) % 10;
var s = parseint(n / 100) % 10;
var m = parseint(n / 1000);

var suma = u + z + s + m;
console.log("Suma cifrelor", suma);

