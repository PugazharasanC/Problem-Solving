// Sorting an array using insertion sort
let arr = Array.from({ length: 10 }, (_, k) => Math.floor(Math.random() * 100));
console.log(...arr);

for (let ind = 1; ind < arr.length; ind++) {
    let currentElement = arr[ind];
    let index = ind;
    while (index > 0 && arr[index - 1] > currentElement) {
        arr[index] = arr[index - 1];
        index--;
    }
    arr[index] = currentElement;
}
console.log(...arr);