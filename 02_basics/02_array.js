const ind_player = ["Sachin", "Dhoni", "Virat", "Bhumrah"];

const world_player = ["Abd", "Ponting", "Wasim Akram", "Kallis"]

const all_player = ind_player.concat(world_player)

console.log(all_player);   


// combining two array we have another way using spread method 

const all_player2 = [...ind_player, ...world_player] // use only 3 dot ...

console.log(all_player2);


// If we have to change to array

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4));
