// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * 题目分析
 * 1. 排序数组
 * 2. 原地删除 => 修改源数组
 * 3. 不使用额外数组空间 => 空间复杂度O(1)
 */

/**
 * 结题思路
 * 1. 暴力求解：遍历数组，如果当前项在数组中已存在，使用splice方法删除该项。时间复杂度O(n^2)
 * 2. 双指针法：一个指针用于遍历，另一个指针用于记录有效的数组长度。时间复杂度为O(n)
 */

var removeDuplicates_1 = function(nums){
    if(nums.length <= 1) return nums.length;
    let maxNum;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== maxNum){
            maxNum = nums[i];
        }else{
            nums.splice(i--, 1);
        }
    }
    return nums.length;
}

var removeDuplicates_2 = function(nums){
    if(nums.length <= 1) return nums.length;
    let maxNum, validLen = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== maxNum){
            nums[validLen] = maxNum = nums[i];
            validLen++;
        }
    }
    return validLen;
}

/**
 * 双指针法的代码优化
 * 1. if(nums.length <= 1) return nums.length; 遍历能够覆盖的情况，无需特殊处理，毕竟这种极端情况较少，大多数情况没必要有这种开销。
 * 2. 感觉使用 maxNum 要比使用 j + nums[j] 要快一丢丢。
 */

var removeDuplicates_3 = function(nums){
    let maxNum, validLen = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== maxNum) nums[validLen++] = maxNum = nums[i];
    }
    return validLen;
}
