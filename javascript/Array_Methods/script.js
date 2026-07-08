//Map,Filter,Reduce->Array Methods->used when the array number is uptated and object element wanted
//map->executes callback for each array and element and returns new array
let priceUSD=[20,30,40]
let priceINR=priceUSD.map(x=>x*83)
console.log(priceINR)//o/p:[1660,2905,1079]

priceINR=priceUSD.map(convert)
function convert(val){
    return val*83
} 
console.log(priceINR)//o/p:[1660,2905,1079]

const input=[//array of object
    {name:'john',age:15},
    {name:'Mano',age:20},
    {name:'Mani',age:20},
    {name:'Karthi',age:20},
    {name:'Harris',age:20}]

const ages=input.map(x=>x.age)
console.log(ages)//[15,45,12,21,26]




//Filter - Returns new array by checking each value of original arr using call back fn
let cost=[35,234,12,34,54,123]
let lessThan100=cost.filter[x=>x<100]
console.log(lessThan100)//o/p:[35,12,34,54]


//Reduce-Executes reducer callback and returns accumulated result
cost=[35,234,12,34,54,123]
let acrtTotal=cost.reduce((total,element)=>total+element,1000)/*
here total is initial and element is in array taken and give to here
1000-> it is the initial value*/
console.log(acrtTotal)//initial 1000 +  (total+element)->492->o/p:1492

/****:
 * cost.reduce((total,element)=>total+element,1000(initial value),index,array)
 */




//other Example:
 arr2d=[
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"]
 ];
 //result={a:1 time,b: 1 time,c:2 times,d:2 times}
console.log(arr2d.flat())//flad is used to converted the 2d array into 1d array
//['a','b','c','c','d','f','d','f','g']

let result={'a':1,'b':2}
result['c']=1
console.log(result)//o/p:{a:1,b:2,c:1}
console.log(result['a'])//o/p:1


let count=arr2d.flat().reduce(
    (accumulator,currVal)=>{/*currVal->Taken the single and Single element
        Accumulator is the the initial value like
        */
        if(accumulator[currVal]){
            accumulator[currVal]++//here increment count of the value
        }else{
            accumulator[currVal]=1//if the value is not means
        }
        return accumulator
    }
    ,{});//in starting accumulator is empty object like in help of this {}





/*Exercise:
1.arr=[4,6,2,3,1,1,,3,5,7,8,4,3]
Remove duplicates from the array
2.Name="Robert Andrew George"
Result:RAG
Abbreviate by gathering first letter of each word
3.Input=[6,-5,7,-2,4,6,-1]
Find the sum of positive numbrerrs only
*/







