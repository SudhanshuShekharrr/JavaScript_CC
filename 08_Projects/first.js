const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - (Winston Churchill)",

"The only way to do great work is to love what you do. - (Steve Jobs)",

"In the middle of every difficulty lies opportunity. - (Albert Einstein)",

"It always seems impossible until it's done. - (Nelson Mandela)",

"The future depends on what you do today. - (Mahatma Gandhi)",

"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action. - (A. P. J. Abdul Kalam)",

"The journey of a thousand miles begins with one step. - (Lao Tzu)",

"Knowledge is power. - (Francis Bacon)",

"An unexamined life is not worth living. - (Socrates)",

"He who has a why to live can bear almost any how. - (Friedrich Nietzsche)",

"Education is the most powerful weapon which you can use to change the world. - (Nelson Mandela)",

"The best way to predict the future is to create it. - (Peter Drucker)",

"Our lives begin to end the day we become silent about things that matter. - (Martin Luther King Jr.)",

"If you tell the truth, you don't have to remember anything. - (Mark Twain)",

"Stay hungry, stay foolish. - (Steve Jobs)",

"The mind is everything. What you think you become. - (Buddha)",

"Knowing yourself is the beginning of all wisdom. - (Aristotle)",

"You must be the change you wish to see in the world. - (Mahatma Gandhi)",

"The only true wisdom is in knowing you know nothing. - (Socrates)",

"Do not go where the path may lead, go instead where there is no path and leave a trail. - (Ralph Waldo Emerson)",
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
const index = Math.floor(Math.random()*20);
quote.textContent = quotes[index];
})