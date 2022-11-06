

1. 
let user = {
    firstname: "giorgi",
    lastname: "smith",
    studentage: 25,
    studentstatus: "active", 
    comments: [
        {Id:0, text:"hello1"},
        {id:1, text:"hello2"}
    ],
   
}  
console.log("studentstatus"); 

 2.    
let names = ["nino","luka","nana","mariam","vano"];

for (let i=0; i < names.length; i++); { 
    
console.log(names[0]); 

console.log(names[1]); 
console.log(names[2]); 
console.log(names[3]);
console.log(names[4]); 
} 

let y = 0; 
while (y < names.length) {
    console.log(names[y]);
    y++; 

}

for (let item of names) {
    console.log(item);
}
for (let item in names) {
    console.log(item);
}

3. 
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89]; 
for (let item of numbers) {
   if (item > 5)
    console.log(item);
}
//for (let i = 0; i > numbers.length; i++); 
    //if (numbers[i] > 5) {
    //console.log(numbers[i]);}

4. 

let student = {
    name: "giorgi",
    age: 20, 
    studentstatus:"active", 

}
if (student.age < 18) {
    console.log("hello");
}
else if (student.name = "levani") {
    console.log("hello levani");
}
else if (student.studentstatus = "active" || student.age < 25) {
    console.log("hello world");
}
else {
    console.log("error");
}
 5. 
 //let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

6. 
let array = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6,7, 10 ]
for (let y of array) {
    if (y % 2 != 1) {
        console.log (y); 

    }
}
for (let y of array) {
    if (y % 2 != 0) {
        console.log (y); 

    }
}



















