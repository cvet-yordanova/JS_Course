function subSum(arr, firstIdx, secondIdx) {

    if (!Array.isArray(arr)) return NaN;


    function sumArrayFromIdxToIdx(arr, firstIdx, secondIdx) {
        let result = 0;

        for (let i = firstIdx; i <= secondIdx; i++) {
            result += Number(arr[i]);
        }

        return result;
    }

    if (firstIdx < 0 || firstIdx >= arr.length) firstIdx = 0;
    if (secondIdx < 0 || secondIdx >= arr.length) secondIdx = arr.length - 1;


    return sumArrayFromIdxToIdx(arr, firstIdx, secondIdx);

}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));
