/*
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]], k = 1

*/
var productExceptSelf = function (nums) {
  let finalArr = [];
  let leftArr = [];
  let leftNum = 1;
  for (let i = 0; i < nums.length; i++) {
    leftArr[i] = leftNum;
    leftNum = leftNum * nums[i];
  }
  let rightArr = [];
  let rightNum = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr[i] = rightNum;
    rightNum = rightNum * nums[i];
    finalArr[i] = rightArr[i] * leftArr[i];
  }

  return finalArr;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
