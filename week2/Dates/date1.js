//Create a Date object for current date & time.

// Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds
let current = new Date();
let dateObj= {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    date: current.getDate(),
    day: current.getDay(),
    hours: current.getHours(),
    minutes: current.getMinutes(),
    seconds: current.getSeconds()
};
console.log(dateObj)
//    3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
console.log(dateObj.day,'-',dateObj.month,'-',dateObj.year,
    dateObj.hours,':',dateObj.minutes,':',dateObj.seconds);