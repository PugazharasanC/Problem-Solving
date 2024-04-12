// ? remove the duplicates in place
let arr = Array.from({ length: 20 }, () => parseInt(Math.random() * 10))
for (let ind = 0; ind < arr.length; ind++) { //O(n**2)
    if (arr[ind] != -1) {
        for (let jnd = ind + 1; jnd < arr.length; jnd++) {
            if (arr[ind] === arr[jnd]) {
                arr[jnd] = -1
            }
        }
    }
}
let ind = 0;
for (let ind1 = 0; ind1 < arr.length; ind1++) {
    if (arr[ind1] != -1) {
        arr[ind++] = arr[ind1]
    }
}
arr.length = ind
console.log(...arr)
