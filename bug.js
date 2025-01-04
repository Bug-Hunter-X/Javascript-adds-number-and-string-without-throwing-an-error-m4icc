function foo(a,b){    return a+b;}
console.log(foo(10, '20')); // Output: 1020
This happens because Javascript does not throw an error when you try to add a number and a string. Instead, it converts the number to a string and concatenates the two strings.