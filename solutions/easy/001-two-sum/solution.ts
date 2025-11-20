function twoSum(nums: number[], target: number): number[] {
  const hashmap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashmap.has(complement)) {
      return [hashmap.get(complement)!, i];
    }

    hashmap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
