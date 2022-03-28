'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;

}
console.log(BinarioADecimal("10"));

function DecimalABinario(num) {
  // tu codigo aca
  var bin = "";
  while(num > 0) {
    bin = num % 2 + bin;
    num = Math.floor(num/2);
  }
  return bin;

}
console.log(DecimalABinario("100"))


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}