// N/2

function isPrime(num) {
    let count = 0;
    for (let fact = 2; fact <= num/2; fact++) {
        count++;
        if (num % fact == 0) {
            return [count, false]
        }
    }
    return [count, true]
}

console.log(isPrime(101))
console.log(isPrime(102))

// ! 100
// * factors of number 100
// ? 2, 4, 5, 10, 20, 25, 50, 