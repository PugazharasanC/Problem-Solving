

function isPalindrome(string) {

    for (let ind = 0; ind < string.length; ind++){
        if (string[ind] !== string[string.length - 1 - ind]){
            return false;
        }
    }


    return true;
}

// anabelle


console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true