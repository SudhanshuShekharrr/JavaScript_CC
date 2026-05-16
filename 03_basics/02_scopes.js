

// {} -> scope, curly braces is scope 

var c = 300    // this is global scope,  glaobal scope values are available for block scope but block scope values are not availbale for global scope


if(true){

    let a = 10
    const b = 20               // block scope
    var c = 30
}

// console.log(a);  // this will give error because block scope variable cann't be accessed outside block
// console.log(a);  // this will give error because block scope variable cann't be accessed outside block
// console.log(b);
console.log(c);  // output :- 30, beacuse of var





// NESTED SCOPE


if(true) {
    const username = "Sudhanshu"
    if(username==="Sudhanshu"){
        const website = " youtube"
        console.log(username + website);  // Sudhanshu youtube, bacause for this block username act like global variable 
    }

    // console.log(website);  // this will throw error beacuse website is block variable and cann't be accesed outside
}
//  console.log(username);  //  this will again throw error because username is block variablr and can't be accessed outside



 



 //                 INTERESTING 




 // Function Declaration
// JavaScript stores (hoists) the entire function in memory before execution.
// That's why we can call addOne() even before its actual definition in the code.



  console.log(addOne(5));     // here we define before function and it won't throw any error

 function addOne(num){
    return num+1
 }

 




  console.log(addTwo(5));     // here it will throw error 


// Function Expression
// Here addTwo is a variable declared with 'const'.
// During hoisting, only the variable is created,
// but it stays in the "Temporal Dead Zone" until initialization.
// The function is NOT available before this line executes.
//
// Therefore calling addTwo() before definition throws:
// ReferenceError: Cannot access 'addTwo' before initialization


 const addTwo = function(nums){
    return num+2  
 }