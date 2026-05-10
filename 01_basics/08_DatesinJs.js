// Dates


let myDate = new Date()
console.log(myDate);

// We can change it string

console.log(myDate.toString());  // Mon May 11 2026 01:38:16 GMT+0530 (India Standard Time)

console.log(myDate.toISOString());

console.log(myDate.toJSON());


console.log(myDate.toLocaleDateString()); // 11/5/2026

console.log(myDate.toLocaleString()); // 11/5/2026, 1:45:20 am


console.log(myDate.toLocaleTimeString()); // 1:45:44 am


console.log(myDate.toTimeString());

console.log(myDate.getTimezoneOffset());


// Time Stamp 

let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1778444476276

