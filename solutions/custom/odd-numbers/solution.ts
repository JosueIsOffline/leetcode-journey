const sumLastDigitsOdd = (n: number): number => {
  const cycle = [1, 3, 5, 7, 9];
  const q = Math.floor(n / 5);
  const r = n % 5;

  let result = q * 25;

  for (let i = 0; i < r; i++) {
    result += cycle[i];
  }

  return result;
};

console.log(sumLastDigitsOdd(7));
