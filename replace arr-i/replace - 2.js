let arr = [1, 3, 4, 2, 0] // [3, 2, 0, 4, 1]
debugger

for (let ind = 0; ind < arr.length; ind++) {
    arr[ind] = (arr[arr[ind]] % arr.length) * arr.length + arr[ind]
}

console.log(arr)
console.log("Old", arr.map(val => val % arr.length))
console.log("New", arr.map(val => parseInt(val / arr.length)))