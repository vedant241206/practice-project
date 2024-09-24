//  console.log("hello");
// const student={
//     fullname: "krutika",
//     cgpa :9,
//     age: 18,
//     isPass: true
// };
// const school ={
//     fullName : "krutika",
//     age : 18,
//     isPass : true,
// };
// console.log(school["fullName"]);
// prompt("hello")

// student["name"]="sujata"
// console.log(student["name"]);
// const profile={
//     username: "krutikapawar",
//     isFollow: true,
//     followers: 569,
//     following: 4,
//     bio :"hello"
// };
// console.log(typeof profile["username"]);
// let a=4;
// let b = 5;
// let cond1=a<b;
// let cond2=b===8;
// console.log(!cond2);
// console.log(b);
// let a=5;
// let enter;
// let c=prompt("enter");
// if (c%a===0) {
//     console.log("mutilpe of 5");
// }
// else{
//     console.log("not mutiple of 5");
// }

// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);

// let age = 18;

//  let a=age >= 18 ? "adulth" : "young";
//  console.log(a);
// let g=prompt("ENTER");
// if(g<100 && g>80){
//     console.log("A");
// }
// else if(g<89 && g>70){
//     console.log("B");
// }
// else if(g<69 && g>60){
//     console.log("C");
// }
// else if(g<59 && g>50){
//     console.log("D");
// }
// else if(g<49 && g>0) {
//     console.log("F");
// }
// for(i=1;i  ;i++){
//     console.log("hello");
// }
// let sum=0;
// for(i=1; i<=10; i++ ){
//     sum =sum + i;
//     console.log(sum);
// }
// let i=1;
//  while( i<=10){
//     console.log("hello");
//     i++;

//  }
// let i=1;
// do{
//    console.log("hello");
//    i++;
// }while(i<=20);
// let str="hello krutika";
// let num=1;
// for(let i of str){
//    console.log(i);
//    num++;
// }
// console.log(num);
// const student={
//    name : "krutika",
//    age : 18,
//    pass : true,
// }

// for(let i in student){
//    console.log(i,student[i]);
// // }
// for(let i=0; i<=100; i++){
//    if(i%2!==0){
//    console.log(i);
//    }
// let num=11;
// let p=prompt("enter:");

// while(p!=num){
//    p = prompt("wrong");
// }
// console.log("congratulation");
// let str="hello krutika";
// console.log(str[4]);
// let p=`hi krutika`;
// console.log(typeof p);
// const hi={
//     pen:"ballpen",
//     prize:10,
// };
// console.log(`this is ${hi.pen} of prize ${hi.prize} rupee ${1+2+4}`);
// console.log("hi\nkrutika");
// let str="hikrutika";
// let str1="FOLLOW  ";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.trim());
// // console.log(str.toUpperCase());
// console.log(str.slice(3,6));
// console.log(str.concat(str1));
// console.log(str.replace("ru",123));
// console.log(str.charAt(5));
// let p=prompt("first name");
// let p1=prompt("last name");
// let str=p;
// let str1=p1;
// b=str.length;
// a=str1.length;
// f=a+b;
// console.log("@" +p + p1 + f);
// let marks=[22,34,78,88,89,90];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[3]);

// for(let i=0; i<6 ; i++){
//     console.log(marks[i]);
// }
// for(let i of marks ){
//     console.log(i);
// }
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(i=0 ; i<marks.length ; i++){
//   sum=sum+marks[i];
// }
// avg=sum/marks.length;
// console.log(avg);
// let items=[250,645,300,900,50];
// for(let i=0; i<items.length ; i++) {
//     offer=items[i]*0.1;
//     items[i]=items[i]-offer;
//     console.log(items[i]);
// };
// let food=["chips","tomato","kurkure","tikka","egg"];
// let snacks=["paneer","kaju"]
// food.pop();
// food.push("paneer","kaju"); 
// console.log(food.toString());
// console.log(food.concat(snacks));
// food.unshift("zip");
// food.shift();
// console.log(food);
// console.log(food.slice(1,4));
// let no=[2,6,8,4,9,3];
// no.splice(2,3,101)
// console.log(no);
// let companies=["bloomerg", "microsoft", "uber","google","ibm","netflix"];
// companies.shift()
// companies.splice(1,1,"ola")
// companies.push("amazon")
// console.log(companies);
// function myfunction(){
//     console.log("hello");
//     console.log("namste");
// }
// myfunction();
// 
// function sum(a,b){
//     console.log(a+b);
// }
// function sum(a,b){
//     sun=a+b;
//     return sun;
// }
// let r=sum(23,67);
// console.log(r);
// const star=(a,b)=>{
//     console.log(a+b);
// };
// const a=(a,b)=>{
//     console.log(a*b);
//     return a*b;
// }
// function vowel(a,b){
//     let sum=0;
//     for(let i=0; i<a.length; i++){
//         if(a[i]===b){
//         sum++;
//     }
// }
// return sum;
// }
// const p="hello krutika how are you";
// const a ="a";
// const b ="e";
// const c ="i";
// const e ="o";
// const d ="u";
// let z=vowel(p,a);
// let x=vowel(p,b);
// let v=vowel(p,c);
// let n=vowel(p,e);
// let m=vowel(p,d);
// const Count=z+x+v+n+m;


// console.log(Count);
// function vowel(a){
//     let count=0;
//     for(const i of a){
//         if(i==="a"|| i==="e"|| i==="i"|| i==="o"|| i==="u"){
//             count++;
//         }
// }
// return count;
// }
// console.log(vowel("hi krutika"));

// const vowel=(a)=>{
//     let count=0;
//     for(const i of a){
//         if(i==="a"|| i==="e"|| i==="i"|| i==="o"|| i==="u"){
//             count++;
            
//         }
//     }
//     return count;
// }
// console.log(vowel("hi krutika"));

// function arr(){
//     console.log("hello");
// }
// function abc(arr){
//     return arr;
// }
// let arr=[1,5,8,93,,90];
// arr.forEach(function myFuc(val){
//     console.log(val);
// // })
// let arr=["hi","hello","record"]
//   arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// })

// let arr=[1,2,3,4,5];
// arr.forEach(function myFuc(val){
//         console.log(val*val);
//     })

// let num = arr.map((val)=>{
//     return val*val;
// })
// console.log(num);
// let arr=[2,4,7,85,35,67,9,23,90,209];
// let num=arr.filter((val)=>{
//     return val>50;
// })
// console.log(num);
// let num=arr.reduce((a,b)=>{
//     return a<b ? a:b;
// })
// console.log(num);
// let marks=[65,90,79,99,93,98,70,33,67];
// let num=marks.filter((val)=>{
//     return 90<=val;
// })
// console.log(num);
// let n=prompt("enter");
// let arr=[];
// function num(n){
//     for(let i=1; i<=n ; i++){
//         // arr.push(i);
//         arr[i-1]=i;
//     }
//     return arr;
// }
// console.log(num(n));

// let sum=num(n).reduce((a , b)=>{
//     return a+b;
// })0

// let mul=num(n).reduce((a,b)=>{
//     return a*b;
// })
// console.log(mul)
// console.dir(document.body.childNodes[1].innerText="abcd");
// console.log(document.body);
// let p=document.getElementById("dom");
// let a=document.getElementsByClassName("white");
// let a=document.getElementsByTagName("p");

// let idx=1;
// for(let i of a){
//     i.innerText=`new text ${idx}`;
//     idx++
// }
// a[0].innerText="hi";
// console.dir(a);
// let a=document.createElement("h2");
// a.append("from apna college");
// console.log(a.textContent);
// console.log(a);
// a.style.backgroundColor="green";
// a.style.visibility="hidden";
// let v=a.setAttribute("id","123");
// console.log(v)
// let b=document.createElement("button");
// b.innerText="submit";
// console.log(b);
// let a=document.querySelector("div");
// a.after(b)
// let a=document.createElement("p");
// a.innerHTML="<i>this new text</i>";
// let c=document.querySelector("p").remove(a);
// let a=document.createElement("button");
// a.innerText="click me!";
// a.style.backgroundColor="red";
// a.style.color="white";
// console.log(a);
// let b=document.querySelector("body").prepend(a)
// let c=document.querySelector("p");
// c.classList.add("newdew")
// console.log(c);


// a.onclick=()=>{
//     console.log("click the button 1 time");
// }
// let b=document.querySelector("div");
// b.onmouseover=()=>{
//     console.log("in div");
// }
// a.onclick=(evt)=>{
//     console.log(evt.clientY);
// }
// a.addEventListener=("click"=()=>{
//     console.log("submit");
// })
// let a=document.querySelector("#id1");
// let a=document.querySelector("div");
// let a=document.querySelector("#id1");
// a.addEventListener("click",()=>{
//     console.log("1 TIME");
// })
// a.addEventListener("click",()=>{
//     console.log("vutton click2");
// })
// const b=()=>{
//     console.log("vutton click3");
// }
// a.addEventListener("click",b)
// a.addEventListener("click",()=>{
//     console.log("vutton click4");
// })
// a.removeEventListener("click",b)
// let a=document.querySelector("#id1");
// let curr="light";
// let b=document.querySelector("body");
// a.addEventListener("click", ()=>{
//     if(curr==="light"){
//         curr="dark";
//         b.classList.add("dark");
//         b.classList.remove("light");
//     }else{
//         curr="light";
//         b.classList.add("light");
//         b.classList.remove("dark");
//     }
//     console.log(curr);
// });
// const student={
//     name:"krutika",
//     marks:98,
//     printMarks:function(){
//         console.log(this.marks);
//     },
//     age:18
// };
// const employee={
//     calcTax(){
//         console.log("salary 10%");
//     }
// };
// const krutika1={
//     salary:50000,
// }
// const krutika2={
//     salary:50000,
// }
// const krutika3={
//     salary:50000,
//     calcTax(){
//         console.log("salary 20%");
//     }
// }
// const krutika4={
//     salary:50000,
// }
// krutika1.__proto__=employee;
// krutika2.__proto__=employee;
// krutika3.__proto__=employee;
// krutika4.__proto__=employee;
class car{
    constructor(){
        console.log("hello guys")
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setbrand(hero){
        this.heronames=hero;
    }
}
let racer=new car;
racer.setbrand("racer");
k6------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------