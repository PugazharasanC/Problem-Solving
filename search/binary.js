
const binarySearch = (arr, search) => {
    let start = 0;
    let end = arr.length - 1;
    let count = 0
    while (start <= end) {
        count++
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === search) {
            return mid;
        } else if (arr[mid] > search) {
            end = mid - 1;
        }
        else if (arr[mid] < search) {
            start = mid + 1;
        }
    }
    console.log(count)
    return -1;
}

let arr = Array.from({ length: 1000000 }, (v, k) => parseInt(Math.random() * 100)).reduce((a, b, ind) => {
    a[ind] = (a[ind - 1] ? a[ind - 1] : 0) + b
    return a;
}, [])

let searchValue4 = arr[arr.length - 1] + 1;
console.log(searchValue4, binarySearch(arr, searchValue4))
// console.log(arr)