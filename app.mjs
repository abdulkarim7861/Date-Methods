//Q:1
let completeDate = new Date();
console.log(completeDate)

//Q:2
let currentMonth = new Date().getMonth();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
console.log(`Current Month : ${monthNames[currentMonth]}`);

//Q:3
let daysNames = ["Mon" , "Tues" , "Wed" ,"Thurs" ,"Fri" , "Sat" , "Sun"];
let currentDay = new Date().getDay()-1;
console.log(`Today is ${daysNames[currentDay]}`);