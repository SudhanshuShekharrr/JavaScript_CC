// const TinderUser = new Object()  // this way of defining object is singleton 

const TinderUser = {}  // this way is non singleton 

TinderUser.id = "123abs"
TinderUser.name = "rohit"
TinderUser.isLogged = false

console.log(TinderUser);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6: "b"}

 const obj4 = {...obj1, ...obj2, ...obj3};
 console.log(obj4);

 // This is the way to get key and value of object

 console.log(Object.keys(TinderUser));  // we get key in array 

 // same we can do for values

 console.log(Object.values(TinderUser));


 // If can also find that whether object has that property or not

 console.log(TinderUser.hasOwnProperty('isLogged'));  // True - means isLogged has isLogged property