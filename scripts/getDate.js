
const currentWeekday = document.getElementById('current-weekday');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();

const weekDay = today.getDay();
// .getDay();
console.log(weekDay);

const weekDayAsName = days[weekDay];

// console.log(days[today]);

currentWeekday.innerText = weekDayAsName;


//
const yearMonthDay = { year: 'numeric', month: 'long', day: 'numeric' };

// const today1 = new Date().toLocaleDateString([], options);

const date = today.toLocaleDateString('en-US', yearMonthDay);

// console.log(today1);

const currentDate = document.getElementById('current-date');
currentDate.innerText = date;