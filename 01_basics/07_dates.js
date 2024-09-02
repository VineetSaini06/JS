// Dates

let mydate=new Date();
// console.log(mydate.toDateString()); //Mon Sep 02 2024
// console.log(mydate.toISOString());  //2024-09-02T13:45:45.059Z
// console.log(mydate.toJSON());       //2024-09-02T13:46:06.136Z
// console.log(mydate.toTimeString()); //13:47:51 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toLocaleString()); //9/2/2024, 1:47:51 PM

let myCreateDate= new Date(2024 ,0 ,6 ); //Month starts with zero
//console.log(myCreateDate.toDateString()); //Sat Jan 06 2024

let myCreateDatewithTime= new Date(2024 ,0 ,6 ,5  ,3);
//console.log(myCreateDatewithTime.toLocaleString()); //1/6/2024, 5:03:00 AM

let mmddyy=new Date("06-01-2005")
//console.log(mmddyy.toDateString()); //Wed Jun 01 2005

let myTimeStamp= Date.now();
// console.log(myTimeStamp); // 1725285612315 it are miliseconds
// console.log(myCreateDate.getTime()); //1704499200000

// console.log(Math.floor(Date.now()/100)); //17252858663 in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));                                            //Monday
 