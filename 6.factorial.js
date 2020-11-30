//factorial 
function factorial(number) {
  if (number === 0)
    return 1;
  //general case
  return number * factorial(number - 1);
}
console.log(factorial(5));
console.log(factorial(15));
console.log(factorial(4));