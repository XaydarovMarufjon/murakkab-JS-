// let nam = "marufjon";
// let nam2 = new String(nam)

// console.log(nam2);


////// 

const car = {
  motor : "2.3 l",
  model : "Sedan",
  airbag : true,
  speed : function (params) {
     console.log(320);
  }
}

const gm = {
  airbag : false
}

// Object.setPrototypeOf(gm , car)
// console.log(gm);


const bmw = Object.create(car);
console.log(bmw.motor);



