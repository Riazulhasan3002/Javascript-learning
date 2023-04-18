var computer = {
price: 299000,
storage: '1TB',
color: 'black',
processor: 'intel i5'
}

//object er properties show
console.log(computer)
console.log(computer.processor)//akta nirdisto property jante chaile
 
// set a object property
computer.price = 20000
console.log(computer)

//different way to set a object propery
computer["processor"] = 'octacore 2 GHz'
console.log(computer) 

var setStorage = 'storage'
computer[setStorage] = '512gb'
console.log(computer)