// Create a function that takes two dates and returns the number of days between the first and second date.

let date_1 = new Date('12/04/1997');
let date_2 = new Date('05/09/1992');

const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log(days(date_1, date_2));
