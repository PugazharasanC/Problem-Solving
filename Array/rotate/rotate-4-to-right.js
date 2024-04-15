let arr = [1, 2, 3, 4, 5];
let k = 13;
k = k % arr.length;
console.log(arr);
let start = 0;
let end = arr.length - 1;
while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
}

console.log(arr);

start = 0;
end = k-1;
while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
}

start = k;
end = arr.length - 1;
while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
}
console.log(arr);


// n * 2