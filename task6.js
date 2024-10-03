// ---->Upper case letter <-----

let input="hello";
let fullname=input.toUpperCase();
console.log(fullname)


let x="world";
    y=x.charAt(0).toUpperCase();
    z=x.slice(1,5);
    console.log(y.concat(z))


// -----> remove vowels <----


let e="world";
let v=e.replace(/[aeiou]/g, '');
console.log(v)