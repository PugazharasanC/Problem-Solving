// Last element moved Right to left
let arr = [1, 2, 3, 4, 5];
let k = 13;
k = k % arr.length;
let max = arr[0];
for (let ind = 1; ind < arr.length; ind++) {
    max = max < arr[ind] ? arr[ind] : max;
}
max += 1;
for (let ind = 0; ind < arr.length; ind++) {
    arr[ind] = arr[ind] + max * (arr[(ind - k + arr.length) % arr.length] % max)
}

for (let ind = 0; ind < arr.length; ind++) {
    arr[ind] = parseInt(arr[ind] / max)
}

console.log(arr)