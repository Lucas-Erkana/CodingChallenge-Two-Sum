var twoSum = function(nums, target) {
  const indices = {};
  for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
      if (difference in indices) {
          return [indices[difference], i];
      }
      indices[nums[i]] = i;

  }

  return [];
  
};


console.log(twoSum([1,3,7,8],10))//expected [1,2]
console.log(twoSum([2,7,11,15],9))//expected [0,1]
console.log(twoSum([3,2,4],6))//expected [1,2]

module.exports = twoSum;