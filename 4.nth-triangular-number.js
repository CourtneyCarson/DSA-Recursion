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

//string splitter 

//first solution: 
// function stringSplitter(string, outArr = []) {
//     // base case
//     if (string.indexOf('/') === -1) {
//       outArr.push(string);
//       return outArr;
//     }
//     // recursive case
//     else {
//       // break on the first '/' push the first to the output array
//       outArr.push(string.substring(0, string.indexOf('/')));
//       // get last part to pass to the recursive call
//       let last = string.substring(string.indexOf('/') + 1);
//       return stringSplitter(last, outArr);
//     }
//   }
//   // test the function
// console.log(stringSplitter('test/string/words/here'));
// console.log(stringSplitter('2/20/2020'));

//second solution: 
function stringSplitter(string, separator) {
  let index = string.indexOf(separator);
  //base case 
  if (index === -1)
    return [string];
  //general case
  return [string.slice(0, index)].concat(stringSplitter(string.slice(index + separator.length), separator));
}
console.log(stringSplitter('02/20/2020', '/'));
console.log(stringSplitter('some/words/here', '/'));
