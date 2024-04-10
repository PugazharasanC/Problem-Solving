// using recursion
function reverse(str) {
    if (str == '') return str;
    return reverse(str.substr(1)) + str[0];
}

console.log(reverse("javascript"))