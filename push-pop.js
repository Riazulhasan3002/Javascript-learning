// array element adding 
var lastBench = ['Rafi', 'zami', 'saurav', 'arif', 'peal', 'prince', 'shakil'];
console.log(lastBench);
lastBench.push('sazzad');
console.log(lastBench);
lastBench.push('rabiul', 'yusuf ali');
console.log(lastBench);

// deleting element from last of the array
lastBench.pop();
lastBench.pop();
console.log(lastBench);

// getting last deleted item from an array 
var lastItem = lastBench.pop();
console.log(lastBench);
console.log(lastItem);

// Homework 
// remove the first element from an array 
var ages = [23, 12, 34 , 56, 76];
console.log(ages);
ages.shift();
console.log(ages);
// getting the first removed Element
var firstRemoved = ages.shift();
console.log(firstRemoved);

// adding element in the first position of the array 
var fruits = ['banana', 'apple', 'grapes', 'pineapple'];
console.log(fruits);
fruits.unshift('mangoes', 'lemon');
console.log(fruits);


