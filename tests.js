const twoSum = require('./twoSum');
const assert = require('assert');

describe('Tests', function () {
  it('should return [1, 2] when input is [1, 3, 7, 8] and target is 10', function () {
    assert.deepStrictEqual(twoSum([1, 3, 7, 8], 10), [1, 2]);
  });

  it('should return [0, 1] when input is [2, 7, 11, 15] and target is 9', function () {
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });

  it('should return [1, 2] when input is [3, 2, 4] and target is 6', function () {
    assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
  });

  it('should return [] when input is [1, 2, 3] and target is 7', function () {
    assert.deepStrictEqual(twoSum([1, 2, 3], 7), []);
  });

  it('should return [] when input is [5, 10, 15] and target is 100', function () {
    assert.deepStrictEqual(twoSum([5, 10, 15], 100), []);
  });
});
