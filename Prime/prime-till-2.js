let primeArr = [false, false]
let arr = []
let count = 0
for (let i = 2; i < 1000; i++) {
    if (primeArr[i] == undefined) {
        primeArr[i] = true;
        arr.push(i)
        for (let j = i * i; j < 1000; j += i) {
            primeArr[j] = false
            count++
        }
    }
}

console.log(count)
console.log(...arr)