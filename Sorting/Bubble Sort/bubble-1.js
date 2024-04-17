

let arr = Array.from({ length: 10 }, (_, k) => Math.floor(Math.random()*100));
console.log(...arr);
for (let itr = 0; itr < arr.length; itr++){
    for (let ind = 1; ind < arr.length; ind++) {

        if (arr[ind - 1] > arr[ind]) {
            arr[ind - 1] = arr[ind] ^ arr[ind - 1];
            arr[ind] = arr[ind - 1] ^ arr[ind];
            arr[ind - 1] = arr[ind - 1] ^ arr[ind];
        }

    }
}
console.log(...arr);

