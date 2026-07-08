//Json->it is very simple and easy compare to xml-> to commnicate with data->data transmittion
/*
{"employee":[
{"firstName":"john","lastName":"Doe"},
{"firstName":"jio","lastName":"Doe"},
{"firstName":"ann","lastName":"Doe"}
]}
*/

let json1='Dave'
let json2=4
let json3=true
let json4=[4,5,67,7]
let json5={
    "stock":"tcs",
    "Price":3500
}
let json6=[//key value pairs->data commnication is very easy
    {
    "stock":"tcs",
    "Price":3500
    },
    {
    "stock":"HUL",
    "Price":2500
    },
    {
    "stock":"SBI",
    "Price":2500
    }
]
console.log(json6)
/*
Promise {<fulfilled>: 'hello'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "hello" 
*/


//array of object
let json7=`[
    {
    "stock":"tcs",
    "Price":3500
    },
    {
    "stock":"HUL",
    "Price":2500
    },
    {
    "stock":"SBI",
    "Price":2500
    }
]`/*o/p:[//o/p:all in one string
    {
    "stock":"tcs",
    "Price":3500
    },
    {
    "stock":"HUL",
    "Price":2500
    },
    {
    "stock":"SBI",
    "Price":2500
    }
] */
let parsed= JSON.parse(json7)

console.log(json7)/*[
    {
    "stock":"tcs",
    "Price":3500
    },
    {
    "stock":"HUL",
    "Price":2500
    },
    {
    "stock":"SBI",
    "Price":2500
    }
] */

console.log(parsed[1])/*{stock: 'HUL', Price: 2500}
Price: 2500
stock: "HUL"
[[Prototype]]: Object*/

console.log(parsed[1].Price)/*2500 */

console.log(JSON.stringify(parsed))//convert array_of_object to string
/*o/p:
[{"stock":"tcs","Price":3500},{"stock":"HUL","Price":2500},{"stock":"SBI","Price":2500}]
*/