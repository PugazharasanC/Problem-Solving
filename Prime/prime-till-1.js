// 1000

function isPrime(num) {
    // debugger
    let count = 1;
    if (num == 2) return [count, true]
    if (num % 2 == 0) return [count, false];
    for (let fact = 3; fact * fact <= num; fact += 2) { // fact += 2 => fact = fact + 2
        count++;
        if (num % fact == 0) {
            return [count, false]
        }
    }
    return [count, true]
}

let till = 1000;
let primeArr = []
let totalCount = 0
for (let val = 2; val <= till; val++) {
    let [count, isPrimeBool] = isPrime(val)
    totalCount += count + 1
    if (isPrimeBool) {
        primeArr.push(val)
    }
}
console.log(totalCount)
console.log(...primeArr)