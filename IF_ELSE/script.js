//IF Else -conditional statements
let pwdCorrect=true
if(pwdCorrect){
    console.log("Login successful");
}
else{
    console.log("Incorrect password");
}
console.log('BYE')

//comparison operators:==, ===, !=, !==, >, <, >=, <=
//Logical operators: &&, ||, !

var age=18
if(age>=18){
    console.log("You are eligible to vote");
}
console.log('BYE')

var age=18
var gender='male'
if(age>=18 && gender==='male'){
    console.log("You are eligible to vote");
}
console.log('BYE')

//max of two numbers
let a=5
let b=10  
let max;  
/*if(a>b){
    max=a;
    console.log("a is greater than b");
}   
else{
    max=b;
    console.log("b is greater than a");
}
    */
   
max=a>b?a:b;//ternary operator
console.log(max);