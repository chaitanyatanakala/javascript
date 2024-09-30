// -->1
// let x=10;
// let y='5'
// console.log(x+y)
//ANS=105//

// -->2
// let x=10;
// x+=5;
// console.log(x)
//ANS=15//

// -->3
// let x=10
// console.log(x-null)
//ANS=10//

// -->4
// let x=10;
//  x*=2;
//  console.log(x)
//ANS=20//

// -->5
// let x=10;
// y='2'
// console.log(x/y)
//ANS=5//

// -->6
// let x=10;
// y=3;
// console.log(x%y)
//ANS=1//

// -->7
// var x=10
// x=x**2;
// console.log(x)
//ANS=100//

// -->8
//  console.log(10>5&&5<10)
//ANS=true//

// -->9
// let x=10;
//  y='10';
//  console.log(x=='y')
//ANS=false//

// -->10
// console.log(null??'default')
//ANS=default//

// -->11
// let x=10
// console.log(x||'default')
//ANS=10//

// -->12
// console.log(!true)
//ANS=false//

// -->13
// console.log(10&5)
//ANS=0//

// -->14
// console.log(10|5)
//ANS=15//

// -->15
// let x=10;
// y=5
// console.log(x^y)
//ANS=15//

// -->16
// let x=10;
// y=++x;
// console.log(x,y)
//ANS=11,11//

// -->17
// let x=10;
// y=x++;
// console.log(x,y)
//ANS=11,10//

// -->18
// let x=10;
// y=--x;
// console.log(x,y)
//ANS=9,9//

// -->19
// let x=10;
// console.log(++x)
//ANS=11//

// -->20
// let x=10;
// console.log(x++)
//ANS=10//

// -->21
// let x=10;
// y=--x;
// console.log(x,y)
//ANS=9,9//

// -->22
// let x=10;
// y=x--;
// console.log(x,y)
//ANS=9,10//

// -->TERNARY OPERATORS-->
// -->23
// let x=10;
// y=x>5?true:false;
// console.log(y)
//ANS=true//

// -->24
// let x=10;
// y=x>5? 'yes': x>3? 'maybe':'No';
// console.log(y)
//ANS=yes//


// -->OPTIONAL CHANGING-->
// -->25
// const obj={a:{b:'c'}};
// console.log(obj?.a?.b);
//ANS=c//

// -->26
// const obj={a:{b:'c'}};
// console.log(obj?.a?.c);
//ANS=undefined//

// -->27
// const obj={a:{b:'c'}};
// console.log(obj?.b?.c);
//ANS=undefined//

// -->NULLISH COALESCING-->
// -->28
// let x=null;
//  y=x??'default';
//  console.log(y)
//ANS=default//

// -->29
// let x=undefined;
//  y=x??'default';
//  console.log(y)
//ANS=default//

// -->31
// let x=0;
//  y=x??'default';
//  console.log(y)
//ANS=0//

// --> account public or private <--
// let accountprivate=true
// let accountPublic=true
// if(accountprivate&&accountPublic){
//     if(accountprivate){
//         console.log('send request')
//     }
//     else{
//     console.log('cant send message')
// }
// }
// else{
//     console.log('if account is public send message')
// }

// --> one tym msg <--
// var msg="hi";
// var onetymmsg=true;

// if(onetymmsg){
//     console.log('unabletoforward')
// }
// else{
//     console.log('forward')
// }

// let messagetime=22;
// if(messagetime<24){
//     console.log('show delete for me and delete for everyone')
// }
// else{
//     console.log('only delete for me')
// }

// --> largest number<--
// let x=221;
// let y=22;
// let z=22;
// if(x>y && x>z){
//     console.log('x is largestnumber')
// }
// else if(y>z && y>x){
//     console.log('y islargestnumber')
// }
// else if(z>x && z>y){
//     console.log('z is largestnumber')
// }
// else{
//    console.log('smallestnumber');
// }

// --> number is power of 2 or not<--
// let x=16;
// if(x%2==0){
//     console.log('it is a power of 2')
// }
// else{
//     console.log('not a power of 2')
// }

// --> right angle triangle <--
// let x=90;
// // if(x==90){
// //     console.log('right angled triangle')
// // }
// // else{
// //     console.log('not a right angle triangle')
// // }


// let a=+prompt("enter first angle");
// let b=+prompt("enter second angle");
// let c=+prompt("enter third angle");

// if(a+b+c===180){
//     alert("its a triangle")
// }
// else {
//     alert("its not a triangle")
// }
// if((a||b||c) ==90){
//     alert("its a right angle triangle")
// }
// else{
//     alert("its not a right angle triangle")
// }

// --> loan eligibility <--

// var x=500,y=30000,z=40;
// if(x>600 && y>=40000 && z>=50){
//     console.log('you are eligible');
// }
// else{
//     console.log('you are not eligible');
// }


// var creditscore=prompt('enter your creidt score')
// var annualincome=prompt('enter your annual income')
// var salry=prompt('enter your salary')
// if(x>600 && y>=40000 && z>=50){
//     console.log('you are eligible');
// }
// else{
//     console.log('you are not eligible');
// }



// --> squares and cubes <--
// let x=2;
// console.log(x**2)
// console.log(x**3)

// --> marks calculations <--
// let x=60;
// if(x>=90){
//     console.log('distinction')
// }
// else if(x>=75 && x<=90){
//     console.log('first class')
// }
// else if(x>=60 && x<=75){
//     console.log('second class')
// }
// else if(x>=35 && x<=59){
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }


// ---> authorisation system for website <----
// let user="customer";
// if(user=="admin"){
//     console.log('logged in as admin')
// }
// else if(user=="employee"){
//     console.log('logged in as employee')
// }
// else if(user=="superadmin"){
//     console.log('logged in as super admin')
// }
// else if(user=="customer"){
//     console.log('logged in as customer')
// }
// else{
//     console.log('invalid user')
// }


// for (i=40; i<=50; i++){
//     if(i%2==0)
//     console.log( `40x${i-40}=${40 * (i-40)}`);
// }

// --> 2 3 2,3 comments --->
// for (i=2; i<=20; i++){
//     if(i%2==0 && i%3==0)
//     console.log(i + "fizzbuzz") 
//     else if(i%2==0){
//         console.log(i + "fizz")
//     }
//     else if(i%3==0){
//         console.log(i + "buzz")
//     }
//   else if(i%5==0){
//     console.log(i)
//   }
//   else{
//     console.log(i)
//   }
// }

// --> switch statements--->
// ---->coffe selection
// let coffe="latte";
// switch(coffe){
//     case "espresso":console.log('espresso is ready');
//     break;
//     case "cappuccino":console.log('cappuccino is ready');
//     break;
//     case "latte":console.log('latte is ready');
//     break;
//     case "mocha":console.log('mocha is ready');
//     break;
// }

// ---->shipping cost
// let country="australia";
// switch(country){
//     case "northamerica":console.log('north america shipping cost is $10');
//     break;
//     case "southamerica":console.log('southamerica shipping cost is $20');
//     break;
//     case "europe":console.log('europe shipping cost is $30');
//     break;
//     case "asia":console.log(' asia shipping cost is $40');
//     break;
//     case "australia":console.log('australia shipping cost is $50');
//     break;
// }


// ---->Else-if ladder<-----
// ---->fare of taxi ride
// let distance=0;
// if(distance>0 && distance<=5){
//     console.log("fare is $5");
// }
// else if(distance>5 && distance<=10){
//     console.log("fare is $10");
// }
// else if(distance>10 && distance<=20){
//     console.log("fare is $20");
// }
// else if(distance>20){
//     console.log("fare is $30 + 5$ extra for every extra km")
// }
// else{
//     console.log("NO ride ")
// }


// ---->discounts of products
// let units=0;
// if(units>0 && units<=5){
//      console.log("no discount on your purchase")
//  }
//  else if(units>=6 && units<=10){
//      console.log("thank for your purchase you have 5% discount on your purchase")
//  }
//  else if(units>=11 && units<=20){
//     console.log("thank for your purchase you have 10% discount on your purchase")
// }
// else if(units>=20){
//     console.log("thank for your purchase you have 15% discount on your purchase")
//  }
//  else{
//      console.log("invalid purchase")
// }


// ---->test cases<-----
// ---->sum of all even numbers
// var sum=0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum=sum+i;
// }
// }
// console.log(" the sum of even numbers between 1 to 100 is: "+sum);

// var sum=0
// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         sum=sum+i;
// }
// }
// console.log(" the sum of even numbers between 1 to 50 is: "+sum);


// ---->factorial of a given number







// for(let i=1;i<=10;i++){
//     if((i%2==0)-1){
//         console.log(i)
// }
// }





// // <--Simple calculator-->
// let a=1
// let b=2
// let operator="-"
// switch(operator){
//     case '+': console.log(a+b)
//     break;
//     case '-': console.log(a-b)
//     break;
//     case '*': console.log(a*b)
//     break;
// }

//  <--palendrome-->
// let str="madam"
// let reversedstr=str.split('').reverse().join('');
// if(str==reversedstr){
//     console.log("the string is a palindrome")
//     }
//     else{
//         console.log("the string is not a palindrome")
//         } 

// print factorial of a number
// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(5)



// let str1="SoMeThInG";
// // var str2=str1[1,3,5,7].toUpperCase();
// str2=str1[0].toLowerCase();
// let str2=str1[0].toLowerCase();
// console.log(str2)  

// palendrome2
//  let x="ram";
//  rev=""
//  for(i=x.length-1;i>=0;i--){
//     rev=rev+x[i];
// }
// if(x==rev){
//     console.log("the string is a palindrome")
//     }
//     else{
//         console.log("the string is not a palindrome")
//     }



// // SoMeThInG in toupper and t0lower
// let str="SoMeThInG"
// let str2=str.toLowerCase()
// let str3=str.toUpperCase()
// console.log(str2)


// even or odd
// number=+prompt("enter your number")
// if(number%2===0){
//     console.log(`${number} is even`)
//     }
//     else{
//         console.log(`${number} is odd`)
//     }



// maximum Element
// function max_element(arr) {
//     if (arr.length === 0) {
//         console.log("The array is empty.");
//         return;
//     }

//     let max_num = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max_num) {
//             max_num = arr[i];
//         }
//     }
//     console.log(`Maximum element in the array is: ${max_num}`);
// }

// // Define the array correctly as numbers
// let arr = [1, 6, 7, 3, 9, 2, 10, 11, 13];
// max_element(arr);

// to find min prime
// input = prompt("enter a number: ")
// first=1
// for (num of input){
//     if (num>1){
//         c=0
//         for (i=2;i<num;i++){
//             if(num%i==0){
//                 c++
//                 break
//             }
//         }
//         if(c==0){
//             if(first==1){
//                 minPrime=num
//                 first++
//             }
//             else{
//                 if(num<minPrime){
//                     minPrime=num
//                 }
//             }
//         }
//     }
// }
// console.log("min prime is "+minPrime)

// Write a program to find whether maximum number is found first or minimum
// number is found first.
// num ="6377"
// x=num
// min = x[0]; max = x[0]
// for(i=1;i<x;i++){
//     if(x[i]>max){
//         max=x[i]
//     }
//     if(x[i]<min){
//         min=x[i]
//     }
// }
// if((num.indexOf(max))>(num.indexOf(min))){
//     console.log("min is first and max is second")
// }
// else{
//     console.log("max is firts and min is second")
// }


// map-->
// let arr=[1,2,3,4,5];
// let x=arr.map((a,b)=>{return a+a})
// console.log(x)

//  let str=["hello","world"];
//  let x=str.map((a,b)=>{return a.toUpperCase()})
//  console.log(x)
 
//  filter-->
// let arr=[1,2,3,4,5];
// let x=arr.filter((a,b)=>a%2==0)
// console.log(x)

// let str=["hello","world","abc"]
// let x=str.filter((a,b)=>{return a.length>=5})
// console.log(x)

// for each
// let arr=[1,2,3,4,5];
// arr.forEach((a,b)=>{console.log(a)})

// let str=["hello","world"];
//     str.forEach((a)=>{console.log(a+"!")})

// every
// let arr=[1,2,3,4,5];
// let x=arr.every((a,b,c)=>{return a>0})
// console.log(x)

// let str=["hello","world","max"];
// let x=str.every((a,b,c)=>{return a.length>=5})
// console.log(x)

// some
// let arr=[1,2,3,4,5];
// let x=arr.some((a,b)=>a%2==0)
// console.log(x)

// let str=["hello","world","max"]
// let x=str.some((a,b,c)=>{return a.includes("x")})
// console.log(x)

// find
// let arr=[1,2,3,4,5];
// let x=arr.find((a,b)=>a%2==0)
// console.log(x)

// let str=["hello","world","max"]
// let x=str.find((a,b,c)=>{return a.includes("x")})
// console.log(x)

// find index
// let arr=[1,2,3,4,5];
// let x=arr.findIndex((a,b)=>a%2==0)
// console.log(x)

// let str=["hello","world",",max"];
// let x=str.findIndex((a,b)=>{return a.includes("x")})
// console.log(x)



// ---->workshop
// 1. Uppercase
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase.
//     - Hints: Use the toUpperCase() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc", "def"]
//     - Output Test Cases: ["HELLO", "WORLD", "ABC"], ["XYZ", "ABC", "DEF"]
    
// let arr=["hello", "world", "abc","xyz", "abc", "def"]
// let x=arr.map((a,b)=>{return a.toUpperCase()})
// console.log(x)

// 2. Substring
//     - Question: Write a function that takes an array of strings as input and returns a new array with the first 3 characters of each string.
//     - Hints: Use the substring() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abcdef"]
//     - Output Test Cases: ["hel", "wor", "abc"], ["xyz", "abc"]
    
    // let arr=["hello", "world", "abc","xyz", "abcdef"]
    // let x=arr.map((a,b)=>{return(a.substring(0,3))})
    // console.log(x)
// 3. Replace
//     - Question: Write a function that takes an array of strings as input and returns a new array with all occurrences of "o" replaced with "0".
//     - Hints: Use the replace() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "foo", "bar"]
//     - Output Test Cases: ["hell0", "w0rld", "abc"], ["xyz", "f00", "bar"]
    // let arr=["hello", "world", "abc","xyz", "foo", "bar"]
    // let x=arr.map((a,b)=>a.replaceAll("o",0))
    // console.log(x)
    
    // 4. Split
    // - Question: Write a function that takes an array of strings as input and returns a new array with each string split into words.
    // - Hints: Use the split() method.
    // - Input Test Cases: ["hello-world", "abc-def"], ["xyz-abc-def"]
    // - Output Test Cases: ["hello", "world", "abc", "def"], ["xyz", "abc", "def"]
    
    // let arr=["hello-world", "abc-def","xyz-abc-def"]
    // let x=arr.map((a,b)=>(a.split("-")))
    // console.log(x)
    
    // 5. Filter
    // - Question: Write a function that takes an array of strings as input and returns a new array with only the strings longer than 5 characters.
    // - Hints: Use the filter() method.
    // - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "abcdef"]
    // - Output Test Cases: ["defghi"], ["abcdef"]
    // let arr=["hello", "world", "abc", "defghi" ,"xyz", "abcdef"]
    // let x=arr.filter((a,b)=>{return a.length>5})
    // console.log(x)
// 6.Map
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase and "!" appended.
//     - Hints: Use the map() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: ["HELLO!", "WORLD!", "ABC!"], ["XYZ!", "ABC!"]

// let arr=["hello", "world", "abc","xyz", "abc"];
// let sum=arr.map((a,b)=>{return a.toUpperCase()+"!"})
// console.log(sum)


// 7.Find
//     - Question: Write a function that takes an array of strings as input and returns the first string containing "o".
//     - Hints: Use the find() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "foo", "bar"]
//     - Output Test Cases: "world", "foo"
    
    // let arr=["hello", "world", "abc", "defghi","xyz", "foo", "bar"]
    // let x=arr.find((a,b)=>{return a.includes("o")})
    // console.log(x)
    
    
// 8.Join
//     - Question: Write a function that takes an array of strings as input and returns a new string with all strings joined by commas.
//     - Hints: Use the join() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: "hello,world,abc", "xyz,abc"
    
    
    // let arr=["hello", "world", "abc", "xyz", "abc"]
    // console.log(arr.join())


    //  unique and duplicate numbers

// arr=prompt("enter a number").split("").map(Number)
// emp=[];uni="";dup=""
// for(i of arr){
//     if(!emp.includes(i)){
//         emp.push(i)
//     }
// }
// console.log(emp);
// for(i of emp){
// c=0;
// for (j of arr){
//     if(i==j){
//         c++
//     }
// }
// if(c==1){
//     uni=uni+i+" "
// }
// else{
//     dup+=i+" "
// }
// if(uni.length==2){
//   console.log("uniques are: "+uni)
// }
// if(dup.length==2){
//   console.log("duplicates are: "+dup)
//   }
//   else{
//     console.log("duplicates are: "+uni)
//   }
// }


// to find counts of uniques and duplicates
// arr=prompt("enter a number").split("").map(Number)
// emp=[];uni="";dup=""
// for(i of arr){
//     if(!emp.includes(i)){
//         emp.push(i)
//     }
// }
// console.log(emp);
// for(i of emp){
// c=0;
// for (j of arr){
//     if(i==j){
//         c++
//     }
// }
// if(c==1){
//     uni=uni+i+" "
//     console.log(`${i} -> ${c}`)
// }
// else{
//     dup+=i+" "
//     console.log(`${i} -> ${c}`)
// }
// }

// outerlayer Code 
// rows=+prompt("enter the number")
// cols=+prompt("enter the number")
// m1=[],sum=0
// for(i=1;i<=rows;i++){
//     x=[]
//     for(j=1;j<=cols;j++){
//     console.log("enter"+i+""+j+"element;")
//     ele=+prompt()
//     x.push(ele)
//     }
    //  m1.push(x)
// }
//
// for(i=0;i<m1.length;i++){
//     res=""
//     for(j=0;j<m1[i].length;j++){
//         if(i==0 || i==rows-1 || j==0 || j==cols-1){
//             res=res+m1[i][j]+" "
//         }
//         else{
//             res=res+" "
//         }
//     }
//     console.log(res)
// }

// outer layer in single line
// rows=+prompt("enter the number")
// cols=+prompt("enter the number")
// m1=[],sum=0
// res=""
// for(i=1;i<=rows;i++){
//     x=[]
//     for(j=1;j<=cols;j++){
//     console.log("enter"+i+""+j+"element;")
//     ele=+prompt()
//     x.push(ele)
//     }
//     m1.push(x)
// }
// for(i=0;i<m1.length;i++){
//     for(j=0;j<m1[i].length;j++){
//         if(i==0 || i==rows-1 || j==0 || j==cols-1){
//             res=res+m1[i][j]+" "
//         }
//         else{
//             res=res+"  "
//         }
//     }
    
// }
// console.log(res)

// diagonals
// rows=+prompt("enter the number")
// cols=+prompt("enter the number")
// m1=[],sum=0

// for(i=1;i<=rows;i++){
//     x=[]
//     for(j=1;j<=cols;j++){
//     console.log("enter"+i+""+j+"element;")
//     ele=+prompt()
//     x.push(ele)
//     }
//     m1.push(x)
// }
// for(i=0;i<m1.length;i++){
//     res=""
//     for(j=0;j<m1[i].length;j++){
//         if(i==j || i+j==rows-1){
//             res=res+m1[i][j]+" "
//         }
//         else{
//             res=res+"  "
//         }
//     }
//     console.log(res)
// }





    










































