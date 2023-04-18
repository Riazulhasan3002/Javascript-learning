// var i = 0
// while(i<10){
//     console.log(i) 
//     if(i == 5)
//     {
//         break;
//     }
//     i++
// }

// var numbers = [54, 35, 21, 98, 23, 101, 45, 67]
// var i = 0
// while(i < numbers.length)
// {
//     var number = numbers[i]
//     if(number >100)
//     {
//         break;
//     }
//     console.log(number)
//     i++
// }


var numbers = [54, 35, 21, 98, 23, 101, 45, 67]
var i = 0
while(i < numbers.length)
{
    var number = numbers[i]
    i++
    if(number > 90)
    {
        continue; // ai rokom kisu paile seita r nibe na, poro borti iteration a chole jabe skip kore
    }
    console.log(number)
}