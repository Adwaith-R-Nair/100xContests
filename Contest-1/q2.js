const arr = [10, 25, 8, 99, 67];
n = arr.length
// console.log(n);

arr_sort = arr.sort((a,b) => a - b);
// console.log(arr_sort);
const ans = arr_sort[n - 2];
console.log(ans);