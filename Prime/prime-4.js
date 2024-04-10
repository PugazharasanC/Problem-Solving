// sqrt(n)/2

function isPrime(num) {
    let count = 0;
    if (num == 2) return true
    if (num % 2 == 0) return false;
    for (let fact = 3; fact * fact <= num; fact += 2) { // fact += 2 => fact = fact + 2
        count++;
        if (num % fact == 0) {
            return [count, false]
        }
    }
    return [count, true]
}

console.log(isPrime(101))
console.log(isPrime(99))

// ! 100
// * factors of number 100
// ? 2, 4, 5, 10

// ? How Many Even Prime Numbers Are there?
// * 1 => 2

// a * b => c


// if the c is odd => a or b or both is odd