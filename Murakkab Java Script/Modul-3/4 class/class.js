class Car {
    constructor(name , color , speed){
      this.name = name 
      this.color = color
      this.speed = speed
    }

    calcSpeed() {
     return this.speed * 100
    }


}

const bmw = new Car("bmw", "black", 200)

console.log(bmw);









