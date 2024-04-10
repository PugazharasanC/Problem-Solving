function findMinAndMax(arr) {
    if (arr.length == 0) {
        return "Empty array"
    }

    let min = arr[0];
    let max = arr[0];

    for (let ind = 1; ind < arr.length; ind++) {
        if (arr[ind] < min) {
            min = arr[ind];
        }
        if (arr[ind] > max) {
            max = arr[ind];
        }
    }

    return {
        min, max
    }
}

const arr = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10000));
console.log(...arr)
console.log(findMinAndMax(arr));