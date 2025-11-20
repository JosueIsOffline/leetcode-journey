function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequency1: { [key: string]: number } = {};
  let frequency2: { [key: string]: number } = {};

  for (let key of arr1) {
    frequency1[key] = (frequency1[key] || 0) + 1;
  }

  for (let key of arr2) {
    frequency2[key] = (frequency2[key] || 0) + 1;
  }

  console.log(frequency1, frequency2);

  for (let key in frequency1) {
    if (!(Number(key) ** 2 in frequency2)) {
      return false;
    }

    if (frequency2[Number(key) ** 2] !== frequency1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
