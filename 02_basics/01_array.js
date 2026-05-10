// Array

const arr = [0,1,2,3,4,5]

const myPlayer = ["Sachin", "Dhoni", "Virat", "Bhumrah"]

arr.push(6)

console.log(arr);
 

// arr.pop() will remove the last value 

// If we need to add something to the front 

arr.unshift(9)
console.log(arr);
 // If we need to remove 0th index value 

 arr.shift() 

 console.log(arr.includes(9)) // false because 9 not include
  console.log(arr.indexOf(3)); // 3


  // we can also change our array to string 

  const newarr = arr.join();
  console.log(newarr); // 0,1,2,3,4,5,6
  console.log(typeof newarr); // string



  // slice,    splice 

  // slice : in slice we have lower value and upper value like (1,3) where we return subarray from index 1 to 2 beacuse 3 is not included

  // splice : in splice we return from index 1 to 3 (where index 3 is also included) but it also trim the orginal arr, it changes our original arr

 const arr2 = arr.slice(1,3);
 console.log(arr2); // [1,2]
 console.log(arr); // [0,1,2,3,4,5,6]

 const arr3 = arr.splice(1,3)
 console.log(arr3); // [1,2,3]
 console.log(arr); // [0,4,5,6], it just trim our original arr
