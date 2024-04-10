// function recursive(num) {
//     if (num < 10) {
//         console.log(num);
//         recursive(num + 1);
//         console.log(num);
//     }
// }
// recursive(0);

// for (let num = 0; num < 10; num++) {
//     console.log(num);
// }


function fibonacci(n, prev1, prev2) {
    if (n === 0) { return prev1 + prev2 }
    return fibonacci(n - 1, prev2, prev1 + prev2)
}