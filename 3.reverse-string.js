console.log(reverseString('hello'));

function reverseString(string) {
  if (string === '') {
    return '';
  }
  else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}
reverseString('words');


// another way 
const reverseString1 = (string) => {
  if (!string.length) {
    return '';
  }
  return string[string.length - 1] + reverseString1(string.slice(0, string.length - 1));
};
console.log(reverseString1('some words here'));
