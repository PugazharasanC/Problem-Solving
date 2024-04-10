

let fibo = [0, 1]; // O(n)
let n = 25
 for (let i = 2; i < n; i++) { // O(n)
    // fibo[2] = fibo[2 - 1] + fibo[2 - 2];
    // fibo[2] = fibo[1] + fibo[0];
    // fibo[2] = 1 + 0;
    // fibo[2] = 1;
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    // console.log(...fibo)
}
console.log(...fibo)
console.log(fibo[n-1])