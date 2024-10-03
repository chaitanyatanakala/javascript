// ------>  date <----

// --->current date<---
const date=new Date();
const year=date.toDateString(date.getDate()+3);
console.log(year)
const week=new Date(date.getTime()+7*24*60*60*1000)
console.log(week)

// ---> add days<----
const news=new Date();
news.setDate(news.getDate() +3);
console.log(news)

// -->formatting date<----
function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

const d = new Date("2024-08-28");
console.log(formatDate(d));

// -->Get Number of Days Between Dates<---
const date1=new Date("2024-08-28")
const date2=new Date("2024-09-01")
const res=Math.abs(date1-date2);
const res1=24*60*60*1000
console.log(res,res1)
console.log(Math.floor(res/res1))