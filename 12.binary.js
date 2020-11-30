function binary(number) {
  if (number === 0) {
      return '0';
  }
  const dividedNumber = Math.floor(number/2);
  const remainder = number % 2;
  if (dividedNumber === 0) {
      return `${remainder}`;
  }
  return binary(dividedNumber) + remainder.toString();
};
console.log(binary(25));


// Write a recursive function that prints out the binary representation 
// of a given number.For example, the program should take 3;
// as an input and print 11 as output, or 25 as an input and print;
// 11001 as an output.Note that the binary representation of 0 should be 0.

