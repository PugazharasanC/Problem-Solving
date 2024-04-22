let stack = [];

function push(data) {
    return stack.push(data);
}

function pop() {
    return stack.pop();
}

function peek() {
    return stack[stack.length - 1];
}

function top() {
    return stack.length - 1;
}

function print() {
    console.log(...stack);
}

console.log(push(1));
console.log(push(5));
console.log(push(10));
console.log(pop());
print()
console.log(push(100))
print()
console.log(top())
console.log(push(105))
print()
console.log(peek())
print()
console.log(pop())
console.log(pop())
console.log(top())
console.log(pop())
console.log(pop())
console.log(pop())
console.log(pop())
console.log(pop())
console.log(pop())
console.log(top())
