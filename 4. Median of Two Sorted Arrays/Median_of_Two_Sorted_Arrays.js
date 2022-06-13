var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = nums1.concat(nums2)
    newArr.sort((a, b) => {
        return a - b
    })

    var median;

    if (newArr.length % 2 == 0) {
        median = (newArr[(newArr.length / 2) - 1] + newArr[((newArr.length / 2) + 1) - 1]) / 2
    } else {
        median = newArr[((newArr.length + 1) / 2) - 1]
    }
    return median
};