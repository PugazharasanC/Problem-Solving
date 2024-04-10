function reverseHelper(str, ind) {
    if (ind >= str.length)
        return ""
    return reverseHelper(str, ind + 1) + str[ind]
}
function reverse(str) {
    return reverseHelper(str, 0)
}
console.log(reverse("hello"))
console.log(reverse("awesome"))
console.log(reverse("rithmschool"))
