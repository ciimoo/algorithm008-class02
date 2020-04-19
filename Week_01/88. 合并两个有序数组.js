// https://leetcode-cn.com/problems/merge-sorted-array/

/**
 * 题目分析
 * 1. 序整数数组
 * 2. 将两个数组合并
 * 3. 保证合并后的数组仍然有序
 */

/**
 * 解题思路
 * 1. 暴力求解：先合并，后排序。没有灵魂的解法。时间复杂度 O((m+n)log(m+n))
 * 2. 双指针法：一个指针记录数组1移动的位置，另一个指针记录数组2移动的位置。时间复杂度为 O(m+n)
 */

var merge_1 = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b); // sort 默认使用字符串进行比较？
}

var merge_2 = function(nums1, m, nums2, n){
    let p1 = m - 1, p2 = n - 1;
    for(let i = nums1.length - 1; i >= 0; i--){
        if(p1 >= 0 && p2 >= 0) {
            nums1[i] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
        }else{
            nums1[i] = p2 >=0 ? nums2[p2--] : nums1[p1--];
        }
    }
}

// 原地处理数组，可以考虑使用开辟辅助数组，或者数组尾部开辟空间。