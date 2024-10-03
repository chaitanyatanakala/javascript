// ------> Objects <----

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj=Object.assign(obj1,obj2)
console.log(obj)





const obj = { a: 1, b: 2, c: 3, d: 4 };
let x=Object.values(obj)
console.log(x)
let b=x.map((a)=>{return a})
console.log(b)
let c=b.reduce((a,b)=>{return a+b})
console.log("Sum up the values of obj's properties using reduce is " + c)




const obj = { a: 1, b: 2, c: 3, d: 4 }
newobj={};
Object.keys(obj).forEach(a=>{
    if(obj[a]>2){
        newobj[a]=obj[a]
    }
});
console.log(newobj)