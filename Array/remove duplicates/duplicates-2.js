
let arr = Array.from({ length: 20 }, () => parseInt(Math.random() * 10))
let unique = []
let obj = {}
for(let i = 0; i < arr.length; i++) {
    if (undefined == obj[arr[i]]) {
        unique.push(arr[i])
    }
    obj[arr[i]] = 1
}
console.log(unique)