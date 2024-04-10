// N

function isPrime(num) {
    let count = 0;
    for (let fact = 2; fact < num; fact++) {
        count++;
        if(num % fact == 0) {
            return [count , false]
        }
    }
    return [count, true]
}

console.log(isPrime(101))
console.log(isPrime(102))