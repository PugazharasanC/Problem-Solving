

function isPalindrome(string) {
    let reversed = string.split('').reverse().join('');
    return string === reversed;
}


console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true