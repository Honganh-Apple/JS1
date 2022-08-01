

var n;
var donVi;
var hangChuc;
var result;

n = 26
donVi = n % 10;
hangChuc = Math.floor(n / 10) % 10;
result = hangChuc + donVi;
console("result: ", result);