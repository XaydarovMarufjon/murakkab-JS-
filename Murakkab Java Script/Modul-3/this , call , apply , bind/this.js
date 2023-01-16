/// context this 
//======= 1 - oddiy function contexti  windowga teng boladi 

// function logger(a , b ) {
//     console.log(this);
//     function sum(paams) {
//         return a + b 
//     }
//     console.log(sum());
// }
// logger(1 , 2)

/// **********************
//====== 2 -  Context this objecni ichidagi methodda  objectni oziga teng
// const obj = {
//     x: 10 ,
//     y: 15 , 
//     sum : function () {
//         console.log(this);
//     }
// }
// obj.sum()


/// **********************
////=== 3 - Context this  funksiya Konstruktorda yange objectni ekzemplyariga teng

// function Car(name , color) {
//     this.name = name
//     this.color = color 
//     this.airbag  = true
// }

// const bmw = new Car("bmw" , "black")

///================ Closure

// let a = 5 
// function get() {
    // let a = 4         agar funkni ichida bomasa tashqaridan qidiradi ani
    // console.log(a);
// }
// console.log(get());

////////// ======  CAll , apply , Bind ======= 

// function logger(speed) {
//     console.log(this);
//     console.log(`mycar name is ${this.name} speed is ${speed}`);
// }

// const car = {
//     name : "BMW" ,
//     color : "black"
// }
// ==== call *********
// logger.call(car ,200) /// funkni objga qaram qiladi

// ==== apply *********
// logger.apply(car , [200]) /// funkni objga qaram qiladi

// ==== bind  ********* yangi funk qaytaradi va this bilan ulaydi

// function calc(numb) {
//      return this*numb
// }

// const multiple2 = calc.bind(2) 
// console.log(multiple2(10));
// console.log(multiple2(10));


//=======================-=-=-=-=

const btn = document.querySelector("button")

btn.addEventListener("click" , function (){ // oddiy anonim funkda this osha elementni oziga teng bo'ladi
    this.style.color = "red"
    console.log(this);
})

const obj = {
        x: 10 ,
        y: 15 , 
        sum : function () {
           const logger = () => { /// call backda context yoq this bosa ozidan tepasiga qaram bo'ladi
             console.log(this);
           }
           logger()
        }
    }
obj.sum()


