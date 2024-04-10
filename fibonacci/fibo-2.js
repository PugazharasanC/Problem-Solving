let n = 25;
let prev = 0;
let current = 1;
for (let i = 2; i < n; i++) { 
    let next = prev + current;
    prev = current;
    current = next;
}
console.log(current);
