function triangularNumber(n) {
  //base case
  if (n <= 1)
    return n;
  //extra base case but can do above
  // else if (n <= 0) 
  //   return  `0`
  // general case
  return n + triangularNumber(n - 1);
}
console.log();
console.log(`triangularNumber: ${triangularNumber(1)}`);
console.log(`triangularNumber: ${triangularNumber(10)}`);
console.log(`triangularNumber: ${triangularNumber(2)}`);
console.log(`triangularNumber: ${triangularNumber(0)}`);
console.log(`triangularNumber: ${triangularNumber(200)}`);

