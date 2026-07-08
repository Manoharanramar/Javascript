/*
Operator:
---------------------
Arithmetic Operators:+,-,*,**(power),/,%,++,--
Assignment Operators:=,+=,-=,*=,/=,%=,**=(power multiplication)
Comparison operators:==,===(Strong comparition),!=,!===(Strong comparition),>,<,>=,<=,?:
Logical Operators:&&,||,!
Bitwise Operators:&,|,~,^,<<,>>,>>>
*/
let a=10
let b=20
console.log("Addition(a+b): ", a+b)
console.log("Subration(a-b): ", a-b)
console.log("addition and Subration(a-b+a-b): ", a-b+a-b)
console.log("Multiple and addition and Subration(a*(b+a)-b): ", a*(b+a)-b)
console.log("power:",a**2)

//special number
console.log("5/0 ", 5/0)
console.log("0/0 ", 0/0)
console.log("Math.sqrt(-1) ", Math.sqrt(-1))
let b
console.log("b value (let b): "+b)

let type=10
console.log("let type=10:"+ typeof(type))

let result="5"-1
console.log(" (5-1) :"+result)//let result="5"-1

let result1="six"*3
console.log("six *3: "+result1)


//comparition operator

//normal comparition
let c='5'
console.log("normal comparition:let c='5' : c==5 ->"+c==5);
let v='10'
let c=10
console.log("normal comparition:let v='10' let c=10 : v!=c ->", v!=c)

//strong comparition
let c='5'
console.log("strong comparition:let c='5' : c===5 ->"+c===5);
let v='10'
let c=10
console.log("strong comparition:let v='10' let c=10 : v!==c ->"+ v!==c)