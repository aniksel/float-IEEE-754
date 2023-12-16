const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isNumber(number) {
  return !isNaN(number);
}

function numberToFloat(number) {
  let sign;
  if(number >= 0) {
    sign = "0";
  } else {
    sign = "1";
  }
  
  let absNumber = Math.abs(number);
  let exponent = Math.floor(Math.log2(absNumber));
  let mantissa = absNumber / Math.pow(2, exponent) - 1;
  
  let biasedExponent = exponent + 127; 

  let exponentBinary = biasedExponent.toString(2).padStart(8, '0');
  let mantissaBinary = mantissa.toString(2).substring(2).padEnd(23, '0');
  
  let result = sign + ' ' +  exponentBinary + ' ' +  mantissaBinary;
  
  return result;
}

rl.question('Введите число: ', (number) => {
  if(isNumber(number)) {
    let result = numberToFloat(number);
    console.log(result);
  } else {
    console.log("Неверный ввод. Пожалуйста, введите число.");
  }
  
  rl.close();
});
