// Variable 
var favouriteBook = '4 hours of reading'
//Array 
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog']
var shoeDogindex = bookList.indexOf('shoe dog')
console.log(shoeDogindex)
bookList[1] = 'story brand'
console.log(bookList)
bookList.push('summer of 69')
console.log(bookList)
bookList.pop()
console.log(bookList)

// conditionals
if(bookList[2] == 'start with why')
{
    console.log("Yes")
}
else{
    console.log("No")
}