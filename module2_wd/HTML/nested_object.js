//creating a nested object representing a person and
const person = {
    firstname: "eva",
    lastname:"priyal",
    age:19,
    address:{
        street:"162 main street",
        city:"bangalore",
        state:"karnataka",
        zipcode:"560079"

    },
    occupation:"engineer"
};
//accessing properties of the main object
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.occupation);
//accessing properties if the nested object
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipcode);