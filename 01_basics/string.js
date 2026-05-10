const name = "Sudhanshu"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Sudhanshu and my repo count is 50

// One more way to declare string 

const playName = new String('Rohit-45') // This will strore as key vaue pair, 0 -> R, 1 -> o, 2 -> h, 3 -> i, 4 -> t, 

// console.log(playName[0]); // R
//  console.log(playName.__proto__);

 console.log(playName.charAt(2));
 console.log(playName.length);
 console.log(playName.toUpperCase());
 console.log(playName. indexOf('t'));

// substring
 const newString = playName.substring(0,6);
 console.log(newString);

 // Replace 
 console.log(playName.replace('i','t'));


 // trim  : trim is used to remove blank space


 const url = "https://hitesh.com/hitesh%20choudhary"

 console.log(url.includes('hitesh')); // it will check whether hiyesh is present or not 



 // split

console.log(playName.split('-'));
