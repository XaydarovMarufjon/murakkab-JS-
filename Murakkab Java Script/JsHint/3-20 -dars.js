 "use strict"; // qatiy rejim func ni yoqish 


// const place = confirm('are you here ?')      // yes or no
// console.log(place);


/// if else 
// const age = +prompt('How old are you ' , "")

// if (age > 25 ){
//     console.log("Horror films");
// }
// else  { 
//     console.log("Cartoon");
// }
 
// age > 25 ? console.log("Horror films") : console.log("Cartoon ");   // if else qisqartmasi 


/// ===while 
// startNum = 1 ;
// while (startNum < 100) {
//     console.log(startNum);
//     startNum++ ;
// }

//==== // do while 
// startNumDo = 1 ;
// do {
//     console.log(startNum);
//     startNum++ ;
// } while (startNumDo < 32);

// for 
// let num = 10;
// for (let i = 0; i <= 8; i++) {
//     console.log(num);
//     num++;  
// }

/////// object 

const theif = {
    jacket : 'black' , 
    height : 1.7 , 
    colors : {
        hair :  "gray" , 
        style : " Cute"
    }  , 
    howOut: function () {
        console.log("Fast help width on e door ");
    } 
}

theif.howOut() 

// distruptizatsiya   
const {hair , style} = theif.colors
console.log(hair ,  style);


for (const key in theif) {
    if (typeof theif[key] == "object") {
        for (let i in theif[key]){
            console.log(`property ${i} is ${theif[key][i]}`);
        }
    }
    else{
        console.log(`property ${key} is ${theif[key]}`);

    }
}

