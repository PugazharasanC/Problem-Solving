// any in place sorting of an array
// we can remove the duplicates

let arr = Array.from({ length: 20 }, () => parseInt(Math.random() * 10))

arr = arr.sort((a, b) => a - b)

let ind = 0;
for (let ind1 = 0; ind1 < arr.length; ind1++) {
    if (arr[ind1] != arr[ind1-1]) {
        arr[ind++] = arr[ind1]
    }
}
arr.length = ind
console.log(...arr)