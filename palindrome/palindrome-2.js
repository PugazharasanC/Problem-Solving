

function isPalindrome(string) {
    
    let reversed = "";
    for(let i = string.length - 1; i >= 0; i--) { //O(n)
        reversed += string[i];
    }
    return reversed === string;//O(1)
}

// anabelle


console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true