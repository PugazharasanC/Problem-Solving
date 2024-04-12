// an array with duplicate values
let arr = Array.from({ length: 20 }, () => parseInt(Math.random()*10))
const unique = []
for (let ind = 0; ind < arr.length; ind++) {
    let count = 0;
    for (let jnd = 0; jnd < ind; jnd++) {
        if (arr[ind] === arr[jnd]) {
            count++
        }
    }
    if (count == 0) {
        unique[unique.length] = arr[ind]
    }
}
console.log(unique)