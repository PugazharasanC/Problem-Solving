let n = 25;
let prev = 0;
let current = 1;
for (let i = 2; i < n; i++) {
    current = prev + current;
    prev = current - prev;
}
console.log(current);