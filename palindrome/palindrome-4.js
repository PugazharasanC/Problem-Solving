

function isPalindrome(string) {
    for (let ind = 0; ind < string.length/2; ind++) {
        if (string[ind] !== string[string.length - 1 - ind]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true