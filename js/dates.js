//STEP 1

/*
let monthName = prompt('Enter a month (ex: February)').toUpperCase();
let monthList = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
let month = monthList.indexOf(monthName);
if (month > -1) {
    let feb = month === 1;
    let year = feb ? prompt('Enter a year') : new Date().getFullYear();
    let numDays = new Date(year, month + 1, 0).getDate()
    console.log(`Number of days in ${monthName}${feb ? ` of ${year}` : ''} is ${numDays}.`);
} else {
    console.log('The month you entered is invalid.');
}
*/

//STEP 2

/*
let monthList = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
let dt = prompt('Enter a date - mm/dd/yyyy');
let date = new Date(dt);
if (date.toString() === 'Invalid Date') {
    console.log('The date you entered is invalid.');
} else {
    console.log(`The date is in ${monthList[date.getMonth()]}.`);
}
*/

//STEP 3

/*
let dt = prompt('Enter a date - mm/dd/yyyy');
let date = new Date(dt);
if (date.toString() === 'Invalid Date') {
    console.log('The date you entered is invalid.');
} else {
    let day = date.getDay();
    if (day === 0 || day === 6) {
        console.log('The date falls on a weekend.');
    } else {
        console.log('The date does not fall on a weekend.')
    }
}
*/

//STEP 4

/*
let dayList = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
let day = new Date().getDay();
console.log(`Yesterday was ${dayList[(day + 6) % 7]}.`);
*/

//STEP 5

/*
let day = new Date().toDateString().charAt(0);
console.log(`Today's day starts with '${day}'.`);
*/
