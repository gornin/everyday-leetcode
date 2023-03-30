# 两数之和

## 题干

<pre>
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

输入：nums = [3,2,4], target = 6
输出：[1,2]

输入：nums = [3,3], target = 6
输出：[0,1]

提示：
   2 <= nums.length <= 104
   -109 <= nums[i] <= 109
   -109 <= target <= 109
   只会存在一个有效答案

进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
</pre>

## 我的思路

我在做这个题时，没有重视`hash-table`这个tag，思路也就没往上面去靠，所以自然不理想。

### v1.0
一般思维就是，取第一个数，求出和目标值的差，再用这个差数值去数组中找一遍，依此类推。方法好想到，但是坏处就是 O(n^2) 。

再优化一点点就是，只拿差值跟当前值的后面的数去匹配，减少一丝计算量，匹配到就是解了。

### v2.0
进化一点，受哈希表启发，查找要快还得用hash

> 为什么会有哈希表，人们存储数据时，想找到一种查找，插入和删除、更新复杂度都不是很大的方法，于是哈希表应运而生。
> 
> 数组存储空间是连续的，占用内存严重，占用空间很大，但数组的二分查找时间复杂度小。<br/>
> 寻址容易，插入和删除困难
>
> 链表存储区间离散，占用内存小，空间复杂度小，但是时间复杂度很大。<br/>
> 寻址困难，插入和删除容易
>
> 哈希表<br/>
> 寻址容易，插入和删除也容易

so，将数组转化为对象，先循环了一次数组，没有干其它的，有些浪费了。余下的操作和上面类似，循环遍历找差值，再在对象中寻找差值的index值。在寻找的时候，还可能找到自身，也需要多判断一下。

### v3.0
一次循环，把查找和存储的事都干了，节约循环的次数。

3.0不同于前两个的一点是，它是向前匹配，前两个版本是向后匹配（前后是以当前值为参考，index小即前，index大即后）。

一次循环，先判断是否匹配到差值，匹配到，也就不用再循环了，到此为止。未匹配到，则把当前值以 {value:index} 的形式存进map，供后续循环使用。

可见其时间复杂度为O(n)，数组至多过一遍就把事情干完了。

[js标准内置对象-【Map】](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

## 我的题解
```js
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
```

## 优秀题解

[【哈希表】两数之和](https://leetcode.cn/problems/two-sum/solution/tu-jie-guan-fang-tui-jian-ti-jie-liang-s-02xs/)

