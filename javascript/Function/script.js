/*Functions-perform specfic tasks can
            be called multiple times
            optionally takes input as
            parameters and optionaly returns a value...
*/


//function declaration
function isPositive(num) {//parameter num is passed to function
    return num > 0;
}
console.log(isPositive(5)); // true//argument 5 is passed to function





function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Call the function


console.log(findProduct(5, 10)); // Output: 50//here before calling function is called hosting
function findProduct(a,b){
    return a*b;
}
console.log(findProduct(5, 10)); // Output: 50
console.log(findProduct);/* Output: [Function: findProduct] ->function code 
is printed not the output of function because we are not calling the function here*/
console.log(typeof findProduct);/* Output: function 
->function code is printed not the output of function because we are not calling the function here*/







//default parameters
function greet(name){
    console.log('hi',name);//o/p: hi undefined
}

function greety(name='Guest'){//default parameter is passed
    console.log('hi',name);//o/p: hi Guest
}

function greetfy(name){
    console.log('hi',name);//o/p: hi 
}
greetfy('Manohar');//o/p: hi Manohar
greetfy();//o/p: hi undefined




//recursion-function that calls itself like loop
//factorial-product of first n numbers using recursion
//5!=5*4*3*2*1=5*4!..
function factorial(n){
    if(n==1){//function declartion
        return 1;
    }
    n*factorial(n-1)
}
console.log(factorial(5))


//function expressoion
//assigned to a variable as object
let a=100
//console.log(isEvemt(5))->//in expression before declaring function is not possible
let isEvemt=function(num){
    return num%2==0
}
console.log(isEvemt(5))
console.log(isEven)



let arr=[2,3,5,6,10]
let findsum=function(arr){
    let sum=0
    for(let val of arr){
        sum+=val
    }
    return sum
}
console.log(findsum(arr))//26


//volume find
let volume=function(l,b,h){
    return l*b*h;
}

//arrow function
let volumes=(l,b,h)=>l*b*h//here this  volume=(l,b,h)=>l*b*h is called arrow function for single line and return also not need only need in the many syntax
consoile.log(volume(1,2,3))//6
console.log(volume(1*2*3*4))//24



let arrays=[1,2,3,4]
let findsum=arr=>{//for only one variables->let findsum=arr
    let sum=0
    for(let val of arr){
        sum+=val
    }
    return sum
}

console.log(findsum(arrays))//24


//area of circle
let area=r=>Math.PI*r*r
console.log(area(5))//78.53981633974483





//variable argument-rest parameters
let prod=function(...args){//for multiple value declaring in function(...args)->function(7,8,9,0....)
    let result=1
    for(let val of args){
        result*=val;
    }
    return result;
}
console.log(prod(7,6,5,4))//store like array//o/p:840



let prod2=function(){
    let result=1
    console.log(arguments)//here arguments i didn't give but it will store in like array for our given prods
    for(let i=0;i<arguments.length;i++){
        result*=arguments[i]
    }
    return result
}
console.log(prod2(7,6,5,4))//o/p:840



//Generators: its like function like but it call one time and again means its call againt nad againt
function* indexGenerator(){
    let index=1
    while(true){
        yield index++//yeild instand of return in this generator
    }
}
const gen=indexGenerator();
console.log(gen.next().value)//1
console.log(gen.next().value)//2
console.log(gen.next().value)//3
console.log(gen.next().value)//4
console.log(gen.next().value)//5
console.log(gen.next().value)//6




//callback-Function passed as arguments
/*for example here prod2(7,6,5,4) here function inside argumenyts
//But callback is used to function calls "function" as a arguments*/
function greetConsole(name){
    console.log('hello',name)
}

function greetHeading(name){
    const heading=document.querySelector('h1')//inside the html
    heading.innerHTML='hello '+name
}

function greet(callback){//here other function caall will come
    console.log(callback)/*o/p->
    function greetConsole(name){
    console.log('hello',name)
} */
    callback("Ram")//here name=Ram in help of callback function
}

greet(greetConsole)
greet(greetHeading)//here callback=greetheading that store in it and call the function


//arrow function for this case
greet(name =>{
    const heading=document.querySelector('h1')//inside the html
    heading.innerHTML='hello '+name
})//same o/p comes


//For-Each loop
arr=['Mano','Haran','Mani','Rama']
arr.forEach(print)//callback like function call//. using dot is called method here .forEach
function print(val){//value by value they call in array
    console.log(val.toUpperCasee())/*here value only taken in  one by one in array using array
    <-o/p->
    Mano
    Haran
    Mani
    Rama
    */
}

//For-Each loop using arrow function
arr.forEach(val=>console.log(val.toUpperCase))/*<-o/p->://here this is arrow function->val=>console.log(val)
    Mano
    Haran
    Mani
    Rama */
console.log(arr)//['Mano','Haran','Mani','Rama']->here small array it |_>temp used in arrow fuction and callback
/*So in this use this index in capital letter*/
arr.forEach((val,index,arr)=>{//but here use the index and value given
    arr[index]=val.toUpperCase
})
console.log(arr)















/*Returning Function and Closure*/
let a=10
function func1(){
    let b,c//local variables
    console.log('a is',a)
}
func1()//a is 100
a=200
func()//a is 200

//returning functions-higher order function
//inner variable access outer variable is called lesical scoping
function outer(){
    let outerVariable='Bread'
    function inner(){
        let innerVariable='Butter'
        console.log('inner variable:',innerVariable)
        console.log('outer variable:',outerVariable)
    }
    inner()
}
outer()//inner variable Butter
//Outer variable Bread




function outer(){
    let outerVariable='Bread'
    function inner(){
        let innerVariable='Butter'
        console.log('inner variable:',innerVariable)
        console.log('outer variable:',outerVariable)
    }
    return inner;
}
let call=outer()
call();/*a is 100
a is 200
inner variable Butter
outer variable Bread
a is 200 */



function outer(name){
    let outerVariable='Bread'
    function inner(){
        let innerVariable='Butter'
        console.log('inner variable:',innerVariable)
        console.log('outer variable:',outerVariable)
        console.log('hello: ',name)
    }
    return inner;
}
let call1=outer("Mano")
call1();/*a is 100
a is 200
inner variable Butter
outer variable Bread
a is 200 
hello mano*/

let call2=outer("Mani")
call2();
call1();/*a is 100
a is 200
inner variable Butter
outer variable Bread
a is 200 
hello mano
a is 100
a is 200
inner variable Butter
outer variable Bread
a is 200 
hello mano*/


//this also ok
function makeAdder(x){
    return function(y){
        return x+y
    }
}
let add=makeAdder(5)//This is x variable
add(10)//This is y=10 variable
console.log(add(10))//o/p:15


let add100=makeAdder(100)
console.log(add100(45))//o/p:145
console.log(add100(10))//o/p:110
console.log(add(5))//o/p:10 old code it is know 
