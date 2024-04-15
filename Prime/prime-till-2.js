let primeArr = [false, false]
let arr = []
let count = 0
let till = 10000
for (let i = 2; i < till; i++) {
    if (primeArr[i] == undefined) {
        primeArr[i] = true;
        arr.push(i)
        for (let j = i * i; j < till; j += i) {
            primeArr[j] = false
            count++
        }
    }
}

console.log(count)
console.log(arr.join("\t"))