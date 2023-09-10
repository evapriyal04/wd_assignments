//create an object using constructor function
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

}
//creating instances(objects)of the car class
const car1 = new Car("toyota","corolla",2022);
const car2 = new Car("honda","civic",2021);
//accessing object properties of car1 and car2
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
