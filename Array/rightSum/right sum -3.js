let arr = [5, 6, 7, 8, 9, 10]

let sum = 0;
for(let ind = arr.length - 1; ind >= 0; ind--){
    sum += arr[ind]
    arr[ind] = sum - arr[ind]
}

console.log(arr)