// ?.  Write a function to reverse an array in place.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let start = 0, end = arr.length - 1; start < end; start++, end--){
    arr[start] = arr[start] + arr[end];
    arr[end] = arr[start] - arr[end];
    arr[start] = arr[start] - arr[end];
}

console.log(arr)