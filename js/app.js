// console.log("Hello JavaScript!");
// console.log("Hello Java!");
// console.log("Hello Python!");

// // name = 123456;

// // console.log(name);

// // {
// //     let city = "Dankotuwa"
// //     console.log(city);    
// // }


// // {
// // var bike = "Yamaha"
// // console.log(bike);
// // }

// // console.log(bike); 

// // Variable Declaration

// let name = "John";
// let age = 30;
// let isStudent = true;
// let customer=["Nimal", "Sunil", "Kamal",1,true,100.50,45];

// console.log(customer);

// let student = {
//     name: "Sirimal",
//     age: 15,
//     isStudent: true,
//     subjects: ["Maths", "Science", "English"]
// };

// console.log(student);
// console.log(student.subjects);
// console.log(student.isStudent);


// Class Defind in Java

// class Customer {
//     name;
//     age;
//     isCustomer;

//     constructor(name, age, isCustomer) {
//         this.name=name;
//         this.age=age;
//         this.isCustomer=isCustomer;
//     }
// }

// let customer1 = new Customer("Anil",25,true);
// console.log(customer1);

// let customer2 =new Customer("Sunil",30,true);
// console.log(customer2);

// let student = {
//     name: "Sirimal",
//     age: 15,
//     isStudent: true,
//     subjects: ["Maths", "Science", "English"]
// };

// console.log(student);
// console.log(student.subjects);
// console.log(student.isStudent);


// let Student = [
//     {
//         name: "Nimal",
//         age : 15,
//         isStudent :true,
//         Marks : [
//             {
//                 Subject : "prf",
//                 result : 80,
//             },
//             {
//                 Subject : "DBMS",
//                 result :75,
//             }
//         ]
//     },

//     {
//         name: "Sunil",
//         age : 15,
//         isStudent :true,
//     },
//     {
//         name: "Kamal",
//         age : 20,
//         isStudent  :true,
    
//     }

// ]

// console.log(Student);
// console.log(Student[0]);
// console.log(Student[2]);

// console.log(Student[0].Marks);
// console.log(Student[0].Marks[0]);
// console.log(Student[0].Marks[1]);
// console.log(Student[0].Marks[0].Subject);
// console.log(Student[0].Marks[1].Subject);
// console.log(Student[0].Marks[0].result);
// console.log(Student[0].Marks[1].result);

// Arithmetic Operators

// let a = 25;

// console.log(++a);
// console.log(a++)
// console.log(a); 

// let b = 15;

// let sum = a + b;

// console.log(sum);


// let a = 25;
// let b = "25";

// console.log(a==b);
// console.log(a===b); // Strict Equality Operator (Checks both value and type)

// // logical Operators

// if(false || true){
//     console.log("Working");

// }else{
//     console.log("Not Working");
// }


// if /else Statement

// marks = 95;

// if(marks >= 90){
//     console.log("A+");
// }else if(marks >= 75){
//     console.log("A");
// }else if(marks >=65){
//     console.log("B+");
// }else if(marks >=50){
//     console.log("C");
// }else{
//     console.log("f");
// }

// Switch case Statement

// let day = 5;

// switch(day){

//     case 1:
//         console.log("Monday");
//         break;
        
//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3 :
//         console.log("Wednesday");
//         break;  
//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;
//     default:
//         console.log("Invalid day");
// }

//          For Loop

for(let i=0; i<=10; i++){
    console.log(i);

}


// while loop

// let y = 0;

// while(y<5){
//     console.log(y);
//     y++;
// }

// console.log("-------------------------------------- ");

// let z = 10;

// while(z<5){
//     console.log(z);
//     z++;
// }

// console.log("-------------------------------------- ");

// let t= 0;

// do{
//     console.log(t);
//     t++;
// }while(t<5);

// console.log("-------------------------------------- ");

// let p = 10;

// do{
//     console.log(p);
//     p++;
// }while(p<5);


//----------- Functions(methods)---------

//------------Normal function------ 01
function myFunction(){
    console.log("Hello Function");

}

myFunction();

//----------------Function with parameters----------- 02

function getSum(num1,num2){
    return num1 + num2;
}
console.log(getSum(10,20));

//---------------Function with variable----------------- 03

let sum = function(num1,num2){

    return num1+num2;   
}
console.log(sum(10,10));


// ---------------Arrow Function----------------- 04

let plusSum=(num1,num2) =>{
    return num1+num2;
}
console.log(plusSum(12.5,12.5));

// ------ without return we can write arrow function--------

let plusSum2=(num1,num2) =>num1+num2;

console.log(plusSum2(20,20 ));  


let sampleTxt = textValue => textValue;

console.log(sampleTxt("Hello arrow function"));