

let arr = Array.from({ length: 10 }, (_, k) => Math.floor(Math.random()*100));
arr[2] = -1
console.log(...arr);
let count = 0;
for (let itr = 0; itr < arr.length; itr++) { // O(n**2)
    let flag = true;
    for (let ind = 1; ind < arr.length; ind++) {
        count++;
        if (arr[ind - 1] > arr[ind]) {
            flag = false;
            arr[ind - 1] = arr[ind] ^ arr[ind - 1];
            arr[ind] = arr[ind - 1] ^ arr[ind];
            arr[ind - 1] = arr[ind - 1] ^ arr[ind];
        }
    }
    if (flag)
        break;
}
console.log(...arr);

console.log(count)