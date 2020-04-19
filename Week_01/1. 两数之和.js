// https://leetcode-cn.com/problems/two-sum/

/**
 * 题目分析：
 * 1. 整数数组
 * 2. 和为固定值
 * 3. 每种输入只有对应一个答案
 * 4. 同一个元素不能使用两遍
 */

/**
 * 解题思路
 * 1. 暴力求解：遍历数组，并在当前项后面的部分中，寻找和为固定值的另一项。时间复杂度O(n^2)
 * 2. 空间换时间：使用数组或者Map记录已经查询过的项，减少重复查询。时间复杂度O(n)
 */

var twoSum_1 = function(nums, target) {
    for(let i = 0; i<nums.length - 1; i++){
        for(let j = i+1; j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

var twoSum_2 = function(nums, target) {
    const map = new Map();
    for(let i = 0; i<nums.length; i++){
        let anotherNum = target - nums[i];
        if(map.has(anotherNum)){
            return [map.get(anotherNum), i];
        }else{
            map.set(nums[i], i); // 记录下标
        }
    }
}

