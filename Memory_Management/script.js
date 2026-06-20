//primitive data Type:
/* String
    number
    bigint
    boolean
    undefined
    symbol
    null
*/


//Reference Types:
/* Arrays
    Function
    all objects-math,data */


let bigNum=10000000000000000000000000n//this or-|

const bigNum2=BigInt(100000000000000000)//this both are same



//How memory management:
let a=100
/*

1)prmitive data all are store in stack
     ________Stack__________
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |  a=100                |
    |_______________________|



      ________Heap___________
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |_______________________|

*/


//Reference Type:
let obj1={name:'Danya',age:24}
let a=100
a=200
let b=a
b=300
/*
1)prmitive data all are store in stack
     ________Stack__________
    |                       |
    |                       |
    |                       |
    |                       |
    |                       |
    |   a=200               |
    |   b=200               |
    |                       |
    |                       |
    |   obj=*               |
    |_______________________|
            |
            |
            |
            |
            |stack is pointing to the heap address
            |
            |
      ________Heap___________
    |                       |
    |                       |
    |                       |
    |                       |
    |   name:'Danya'        |
    |     age:24            |
    |                       |
    |                       |
    |                       |
    |                       |
    |_______________________|

*/
let obj2=obj1
obj1.age=25
console.log('obj1',obj1)//25 pointing same value in the stack to heap
console.log('obj2',obj2)//25 Here obj1,obj2  is stack pointing same value in the heep


obj2.name='ramya'
obj1.age=26
console.log('obj1',obj1)//o/p:{name:'ramya',age:26}
console.log('obj2',obj2)//o/p:{name:'ramya',age:26}

//But prmitive:
let a=10;
a=b;
b=30;
console.log(a)//10
console.log(b)//30


//Array:
let arr1=[2,3,4]
let arr2=arr1
arr2[0]=10
console.log(arr1)//o/P:[10,3,4]
console.log(arr2)//o/p:[10,3,4]
