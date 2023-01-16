//// constructor funk

function Car(name , color , mph , year) {
    this.name = name 
    this.color= color
    this.airbag = true
    this.mph = mph
    this.year = year
    this.speed = function () {
        console.log(`this car ${this.name} is speed ${this.mph }`);
    }
}

Car.prototype.year = function (){
    console.log(`this car model is ${this.year}`);
}

let bmw = new Car("bmw" , "white" , 200  , 2034)
let gm = new Car("malibu" , "black" , 330 , 2013)


console.log(bmw);
console.log(gm);
