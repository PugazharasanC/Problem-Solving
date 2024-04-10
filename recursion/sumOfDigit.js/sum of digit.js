

//  Write a recursive function to find the sum of digits of a number.

// ? How to find the sum of digits of a number?
// sumOfDigits(123) => 123%10 + sumOfDigits(Math.floor(123/10)) => 3 + sumOfDigits(12)
// sumOfDigits(12) => 12%10 + sumOfDigits(Math.floor(12/10)) => 2 + sumOfDigits(1)
// sumOfDigits(1) => 1%10 + sumOfDigits(Math.floor(1/10)) => 1 + sumOfDigits(0)
// sumOfDigits(0) => 0


function sumOfDigits(num) {
    if (num < 10) return num;
    let temp = num%10
    return temp + sumOfDigits((num-temp) / 10);
}

console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(456)); // 15
console.log(sumOfDigits(789)); // 24