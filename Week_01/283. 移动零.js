// https://leetcode-cn.com/problems/move-zeroes/

/**
 * 题目分析
 * 1. 原地处理，不能拷贝额外的数组
 * 2. 0 移动到数组末尾
 * 3. 保持非零元素的相对顺序
 */

/**
 * 解题思路
 * 1. 暴力求解：遍历数组，遇到0删除，并在数组最后追加0。时间复杂度为O(n^2)
 * 2. 双指针法：一个指针遍历数组，另一个指针记录当前应该替换的位置。时间复杂度为O(n)
 */

var moveZeroes_1 = function(nums) {
    let len = nums.length;
    for(let i = 0; i<len; i++){
        if(nums[i] === 0) {
            nums.splice(i--, 1);
            nums.push(0);
            len--
        }
    }
};


var moveZeroes_2 = function(nums) {
    let insertIndex = 0;
    for(let i=0; i< nums.length; i++){
        if(nums[i] !== 0) {
            nums[insertIndex] = nums[i];
            if(insertIndex++ !== i) nums[i] = 0;
        }
    }
};

