"use strict";

// let myName = "Marufjon";
// let newName = new String(myName)

// console.log(myName);
// console.log(newName);


// //////////

const car = {
    motor : "x" , 
    color : 'black',
    isAirbag : true,
}

const gm = {
    isAirbag : false,
}

// gm.__proto__ = car
// console.log(gm);
// // console.log(gm.color);

/////  meros proto yaratish 

// Object.setPrototypeOf(gm ,car )
// console.log(gm.color);


// ////// 

// const bmw = Object.create(car)
// console.log(bmw.color);