let arr = [5, 6, 7, 8, 9, 10]

let sum = arr.reduce((a, b) => a + b) // O(n)

for (let ind = 0; ind < arr.length; ind++) { // O(n)
    sum = arr[ind] = sum - arr[ind]
}
console.log(arr)