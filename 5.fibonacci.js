// fibonacci 
function fibonacci(number) {
  // base case
  if (number <= 1)
    return number;

  //general case
  return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(7));

// tom version fibonacci 
function fibinachi(n) {
  if (n == 0)
    return 0;
  if (n == 1)
    return n;
  else
    return fibinachi(n - 1) + fibinachi(n - 2);
}
fibinachi(7);
