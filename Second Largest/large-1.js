
let arr = [3, 3]//[3, 43, 5, 546, 456, 24, 23, 545, 757, 789, 7, 7, 1045, 345, 3456, 65, 876, 84, 6, 345, 975];

// O(n)
let max = arr[0];
let secondMax = -Infinity;
if (arr.length < 2) {
    console.log(undefined)
} else {
    for (let ind = 1; ind < arr.length; ind++) {
        if (max < arr[ind]) {
            secondMax = max;
            max = arr[ind];
        }
        if (max != arr[ind] && secondMax < arr[ind])
            secondMax = arr[ind]
    }

    console.log(max, secondMax === -Infinity ? "No second largest" : secondMax)
}