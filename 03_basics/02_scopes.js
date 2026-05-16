

// {} -> scope, curly braces is scope 

var c = 300    // this is global scope,  glaobal scope values are available for block scope but block scope values are not availbale for global scope


if(true){

    let a = 10
    const b = 20               // block scope
    var c = 30
}

console.log(a);  // this will give error because block scope variable cann't be accessed outside block
console.log(a);  // this will give error because block scope variable cann't be accessed outside block
console.log(b);
console.log(c);  // output :- 30, beacuse of var