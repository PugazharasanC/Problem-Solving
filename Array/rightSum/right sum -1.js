let arr = [5, 6, 7, 8, 9, 10];

for (let ind = 0; ind < arr.length; ind++) {
    let sum = 0;
    for (let anotherInd = ind+1; anotherInd < arr.length; anotherInd++) {
        sum += arr[anotherInd];
    }
    arr[ind] = sum;
}

console.log(arr);