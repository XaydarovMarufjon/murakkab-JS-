"use strict";

// const arr = [2,3,4,5,6];

// arr.forEach( (item , index , arr)=>{
//     console.log(`${index}: ${item} in to ${arr}`);
// })


//split
// const movies = prompt('whats your favoruite movies' , '');
// const usermovies =movies.split(',');
// console.log(usermovies);

// sort 
// const arr2= [5,345,37,37342,6]
// arr2.sort((a,b)=>a-b);  // sonlarni osish boycha sortlash 
// console.log(arr2);

/////  clone =>  objectni ichidagi malumotlarmni kochirish  

const numbers =  { 
    x:10 , 
    y:2,
    z:{
        a:1,
        b:2
    }
}
const newNumbers = Object.assign({} , numbers)
newNumbers.x = 20 
console.log(newNumbers);

/// objlarni birlashtirish
const numbers2 = {
    f : 35
}
const  allNumbers = Object.assign(numbers , numbers2); 
console.log(allNumbers);








