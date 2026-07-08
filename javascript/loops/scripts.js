//Loops->for,while,do-while

//for
for(let i=1;i<=5;i++){//o/p:hello->5 times
    console.log("Hello");
}

for(let i=1;i<=5;i++){//1,2,3,4,5
    console.log(i);
}

//print 10 to 1
for(let i=10;i>=0;i--){
    console.log(i)//10,9,8,7,6,5,4,3,2,1,0
}



//while
let i=10
while(i>=1){////10,9,8,7,6,5,4,3,2,1,0
    console.log(i)
    i--
}
console.log("outside while loop")//outside while loop



//do-while
i=10
do{
    connsole.log(i)
    i--
}while(i>=1)



//break-stops the loop
while(true){
    let number=Number(prompt('enter a number'))
    if(!NaN(num)){//not a number-NaN
        break;
    }
}


//continue-current iteration skip
for(i=1;i<=10;i++){
    if(i%3==0)
        continue//skip the element in the itertion
    console.log(i)
}



//for...of->like for each for array accesss
let arr=['apple','orange','grapes','mango']
for(i=0;i<arr.length;i++){
    console.log(arr[i].toUpperCase())//apple,orange,grapes,mango
}

for(let fruit of arr){
    console.log(fruit)//apple,orange,grapes,mango
}

//for... in->object access
let item={
name:"phone",
quantity:1,
price:25000
}

for(let key in item){
    console.log(key)//name,quantity,price
    console.log(item[key])//phone,1,25000
}