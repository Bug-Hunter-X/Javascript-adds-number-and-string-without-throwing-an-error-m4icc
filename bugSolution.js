function foo(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('Inputs must be numbers');
  }
    return a+b;}
console.log(foo(10, 20)); //Output: 30
console.log(foo(10, '20')); // Throws an error