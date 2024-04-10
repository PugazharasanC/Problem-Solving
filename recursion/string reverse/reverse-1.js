

//  Write a recursive function to reverse a string.

function reverse(str) {
    if (str.length === 0) {
        return '';
    }
    // return 'e' + reverse('awesom');
    // returm 'm' + reverse('aweso');
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1));  // slice(0, str.length - 1) returns everything but the last character of the string.
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
console.log(reverse('')); // ''
console.log(reverse('a')); // 'a'