//Set object - collection of values
//          - Values are unique only store
let arr=[1,1,2,3,4,5,5,5,5,10,8]
let myset1=new Set(arr)
console.log(arr)//[1,1,2,3,4,5,5,5,5,10,8]
console.log(myset1)//{1,2,3,4,5,10,8}

//new set
let mySet2=new Set()
mySet2.add(4)
mySet2.add(5)
mySet2.add('pqr')
mySet2.add({'a':1,'b':2})
mySet2.add(4)
console.log(mySet2)//{4,5,'pqr',{'a':1,'b':2}}

let obj={'a':1,'b':2}
mySet2.add(obj)
console.log(mySet2)//{4,5,'pqr',{....},{....}} only prmitive data is strongly set  method follows
console.log(mySet2.size)//5
console.log(mySet2.has(5))//element 5 have ->true
console.log(mySet2.has(6))//element 6 didn't have in object->false
console.log(mySet2.delete(4))//{5,'pqr',{...},{...}}

let arr2=Array.from(mySet2)//convert object to array
console.log(arr2)


//Map:its is a object
//Map objects are collections of key-value pairs.A key in the Map may only occur once,
//key or value can be object

let map1=new Map()
map1.set('a',1)//{'a'=>1,'b'=>2}
map1.set('b',2)
console.log(map1)
console.log(map1.size)
console.log(map1.has('c'))//not found->false
map1.delete('a')

map1.set('d',2)
map1.set('e',3)//{'a'=>1,'b'=>2,'d'=2,'e'=3}

for(let i of map1){
    console.log(i)//['b',2] ['d',2] ['e',3]
}

for(let[k,v] of map1){
    console.log(k)//b,d,e->taking key
    console.log(v)//2,2,3->taking value
}

for(let k of map1.keys()){
    console.log(k)//b,d,e->taking key
}

for(let v of map1.keys()){
    console.log(v)//2,2,3->taking value
}


map1.forEach((v,k)=>{
    console.log('key',k,'value',v)
    /*
    key b value 2
    key d value 2
    key e value 3
    */
})


//2d array to map
let kvArray=[['a',1],['b',1]]
let map2=new Map(kvArray)
console.log(map2)//{'a'=>1,'b'=>1}
console.log(...map2)//{'a'=>1,'b'=>1}
