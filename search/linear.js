

let arr = [12, 342, 5, 356, 234, 324, 43, 535, 6, 8, 67, 85, 634, 4, 346, 6, 876, 9, 687, 5345, 234, 55, 757, 8, 678, 446, 45, 665, 8, 968, 8564, 6, 5234, 4, 5656, 786, 8, 566, 34, 3, 4, 54658, 9, 84, 354, 233, 2346, 78, 54654]

let searchValue = 12;
let index = -1;
let count = 0;
for (let ind = 0; ind < arr.length; ind++) {
    count++;
    if (arr[ind] === searchValue) {
        index = ind;
        break;
    }
}
console.log(index, count);