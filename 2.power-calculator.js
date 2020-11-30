function powerCalculator(x, y) {
  //base case
  if (y === 1) {
    return x;
  }
  if (y <= 0) {
    return ('exponent should be >=0');
  }

  //general case
  const answer = powerCalculator(x, y - 1);
  return x * (answer);
}

powerCalculator(10, 2);
powerCalculator(10, -2);
