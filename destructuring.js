//basic object
let toyota = {
  model: "camry",
  year: 2018,
  type: "sedan",
  color: "green",
  mileage: 63486
}
//log out any variable
console.log(toyota.year);

//destructure variables and log them out
let { year, type} = toyota;

console.log(year);
console.log(type);

//destructure variable and perform methods
let { model } = toyota;

if(model){
  console.log(model)
  let firstLetter = model[0];
  let length = model.length;
  console.log(firstLetter);
  console.log(length);
}

//nested object
let pet = {
  name: "Wiggles",
  type: "dog",
  color: "brown",
  age: 6,
  parent:{
    firstName: "Jerry",
    lastName: "Springer",
    city: "Chicago",
    state: "Illinois",
    profession: "Television Host"
  }
}

let { firstName, lastName, profession } = pet.parent;

//let { parent: { firstName, lastName, profession } } = pet;

console.log(`${firstName} ${lastName}, ${profession}`)
