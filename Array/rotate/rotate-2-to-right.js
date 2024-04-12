let arr = [1, 2, 3, 4, 5];
let k = 13;
k = k % arr.length;
for (let times = 0; times < k; times++) {
    arr.unshift(arr.pop());
}

console.log(arr);