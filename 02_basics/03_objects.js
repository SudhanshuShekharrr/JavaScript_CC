// objects literals
 

const mySymbol = Symbol("key1");

const JsUser = {
    name: "Sudhanshu",
    age: 22,
    [mySymbol]: "Key1",      // this is the way to define symbol in object
    location: "Madhubani",
    email: "sudhanshu.iasgov@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
}

// How to access object
// 01 way is 
console.log(JsUser.email);  // sudhanshu.iasgov@gmail.com
console.log(JsUser["email"]);  // sudhanshu.iasgov@gmail.com

// this is the way to access symbol
console.log(JsUser[mySymbol])

// we can change value in object like
JsUser.name = "Shekhar"
console.log(JsUser.name);

// But if we want to freeze anything, means we don't want to change then we can use
// Object.freeze(JsUser)
JsUser.age = 24
console.log(JsUser.age); // it gave original value that is 22  

// We can also use function inside object

JsUser.greeting = function(){
    console.log("Hello Everyone") ;
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Everyone, ${this.name}`);
}

console.log(JsUser.greetingTwo());



// Otherway of accessing object, this is better way 

