
const currentWeekday = document.getElementById('current-weekday');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();
console.log(today);

console.log(days[today]); // Output: Current day (e.g., "Tuesday")
// days[today]; // Output: Current day (e.g., "Tuesday")

currentWeekday.innerText=days[today];


//
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const today1 = new Date().toLocaleDateString('en-US', options);
console.log(today1); // Output: "March 5, 2025" (or the current date)

const currentDate = document.getElementById('current-date');
currentDate.innerText = today1;