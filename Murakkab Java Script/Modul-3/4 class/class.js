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
console.log(bmw.calcSpeed());

class Spark extends Car {   /// extends voris class
  constructor(name , color , speed,  isAirbag , extraBallon){
    super(name , color , speed)
    this.isAirbag = isAirbag
    this.extraBallon = extraBallon
  }

  logger(){
    console.log(`name of car ${this.name}, color ${this.color} , MaxSpeed ${this.speed} mph , Airbag ${this.isAirbag} , extraballon ${this.extraBallon}`);
  }
}

const spark = new Spark("Spark AT" , "white" , 1.8 ,true, 3)

spark.logger()
console.log(spark.calcSpeed());
 






