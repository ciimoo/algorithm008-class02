// https://leetcode-cn.com/problems/plus-one/

/**
 * 题目分析
 * 1. 整数组成的非空数组所表示的非负整数
 * 2. 最高位数字存放在数组的首位
 * 3. 数组中每个元素只存储单个数字
 */

/**
 * 解题思路
 * 从最后一位开始，逢10进1
 */

var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        digits[i] = ++digits[i] % 10;
        if(digits[i] !== 0) return digits;
    }
    digits.unshift(1);
    return digits;
};