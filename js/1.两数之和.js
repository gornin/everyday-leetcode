/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * Accepted
 * 57/57 cases passed (400 ms)
 * Your runtime beats 5.07 % of javascript submissions
 * Your memory usage beats 5 % of javascript submissions (46.9 MB)
 * @param {number[]} nums nums = [2,7,11,15]
 * @param {number} target target = 9
 * @return {number[]} [0,1]
 */
var twoSum_1 = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const num1 = target - num;
    const index1 = nums.slice(index + 1).findIndex((num) => num === num1);
    if (index1 > -1) {
      return [index, index1 + index + 1];
    }
  }
};

/**
 * Accepted
 * 57/57 cases passed (68 ms)
 * Your runtime beats 72.05 % of javascript submissions
 * Your memory usage beats 8.87 % of javascript submissions (43.5 MB)
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var twoSum_2 = function (nums, target) {
  const numObj = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    numObj[element] = index;
  }

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const num1 = target - num;
    const index1 = numObj[num1];
    if (index1 && index !== index1) {
      return [index, numObj[num1]];
    }
  }
};

/**
 * Accepted
 * 57/57 cases passed (48 ms)
 * Your runtime beats 99.83 % of javascript submissions
 * Your memory usage beats 35.83 % of javascript submissions (42.3 MB)
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var twoSum = function (nums, target) {
  const map = new Map();
  // [3,2,4]
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
// @lc code=end
