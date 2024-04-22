

function isBalancing(string) {

    let stack = [];
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
            stack.push(string[i]);
        } else {
            let last = stack.pop();
            if (string[i] !== brackets[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalancing('()'));
console.log(isBalancing('()[]{}'));
console.log(isBalancing('(]'));
console.log(isBalancing('([)]'));
console.log(isBalancing('{[]}'));
console.log(isBalancing(']'));