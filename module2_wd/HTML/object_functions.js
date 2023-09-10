//creating an object using object literal notation
const person = {
    firstName:"John",
    lastName:"doe",
    age: 30,
    occupation:"engineer",
    //method inside the object
    sayHello:function(){
        console.log(`hello,my name is  ${this.firstName} ${this.lastName}`)
    }

};
//accessing object prperties
console.log(person.firstName);//output:john
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);
person.sayHello();
