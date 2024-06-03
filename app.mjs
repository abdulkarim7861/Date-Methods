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

//Q:4
let daysnames = ["Mon" , "Tues" , "Wed" ,"Thurs" ,"Fri" , "Sat" , "Sun"]
let today = new Date().getDay()-1;
let todayDayName = daysnames[today]
console.log(todayDayName)
if(todayDayName === "Sat" || todayDayName == "Sun"){
    console.log(`Its Funday`)
}else{
    console.log(`Week day`)
}

//Q:5
let daysInMonths = new Date().getMonth()-1;
    console.log(`${daysInMonths}`)
    if(daysInMonths<=15){
        alert(`First Fifteen days of the month.`)
    }else{
        alert(`Last days of the month.`)
    }

//Q:6
let current = new Date();
console.log(`Current Date: ${current}`)

let elapsedMilliSecond = current.getTime();
console.log(`${current} & Elapsed Millisecond :${elapsedMilliSecond}`);