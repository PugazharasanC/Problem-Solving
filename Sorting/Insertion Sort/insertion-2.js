// creating an sorted array using insertion sort

class SortedArray {
    constructor() {
        this._array = [];
    }
    push(value) {
        let index = this._array.length ;
        while (index > 0 && this._array[index-1] > value) {
            this._array[index] = this._array[index-1];
            index--;
        }
        this._array[index] = value;
    }
    get array() {
        return this._array;
    }
    get length() {
        return this._array.length;
    }
}

const arr = new SortedArray();

for (let ind = 0; ind < 10; ind++) {
    arr.push(Math.floor(Math.random() * 100));
}

console.log(...arr.array);