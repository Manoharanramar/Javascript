//string->group of character
let str1="Strive not to be  a success"
let str2="but rather to be a value"

console.log("Str1: Strive not to be  a success")
console.log("Str2: but rather to be a value")

console.log("str concate: ",str1+str2)

//concate function
let a=str1.concat(str2)
console.log("let a=str1.concat(str2): "+a)

let b=str1.concat("**",str2)
console.log("let b=str1.concate('**',str2): "+b)


/*
Partitioning string(part part separation):

slice(start,end)
substring(start,end)
substr(start,length)

*/
 
let c=str1.slice(4,10)//slice(start,end)
console.log("let c=str1.slice(4,10)//slice(start,end): "+c)

let d=str1.slice(4)//slice(start,end)
console.log("let c=str1.slice(4)//slice(start,end): "+d)

let e=str1.slice(-5)//slice(start,end)
console.log("let c=str1.slice(-5)//slice(start,end): "+e)

let f=str2.substring(4,10)//substring(start,end)
console.log("let f=str2.substring(4,10)//substring(start,end): "+f)
 
let g=str2.substr(4,10)
console.log("let g=str2.substr(4,10)//substr(start,length): "+g)

let h=str1.replace('strive','Aim')
console.log("let h=str1.replace('strive','Aim'): "+h)

let i=str2.toUpperCase()
console.log("let i=str2.toUpperCase(): "+i)

let j=str2.toLowerCase()
console.log("let j=str2.toLowerCase(): "+j)

let k=str1.length
console.log("let k=str1.length: "+k)

let l=str1.trim()
console.log("let l=str1.trim(): "+l)

let n=str1.trimStart()
console.log("let n=str1.trimStart(): "+n)

let m=str1.trimEnd()
console.log("let m=str1.trimEnd(): "+m)

let bill='RS.10'
console.log("let bill='RS.10': "+bill)

let q=bill.length
console.log("let q=bill.length: "+q)

let r=bill.padEnd(7,'0')
console.log("let r=bill.padEnd(7,'0'): "+r)

let w=str1[1]
console.log("let w=str1[1]: "+w)

let s=str1.charAt(1)
console.log("let s=str1.charAt(1): "+s)

let o=str1.charCodeAt(1)
console.log("let o=str1.charCodeAt(1): "+o)

let index=str1.indexOf('e')
console.log("let index=str1.indexOf('e'): "+index)

let indexof=str1.lastIndexOf('e')
console.log("let indexof=str1.lastIndexOf('e'): "+indexof)

let search=str1.search('not')
console.log("let search=str1.search('not'): "+search)

let persent_or_not=str1.includes('not')
console.log("let persent_or_not=str1.includes('not'): "+persent_or_not)

let start_element=str1.startsWith('S')
console.log("let start_element=str1.startsWith('S'): "+start_element)

/*Exercise 3:
print a random letter from your name
let name='Manoharan'
*/
console.log("Exercise 3: print a random letter from your name:")
let name='Manoharan'
let random_index=Math.floor(Math.random()*name.length)
let random_letter=name[random_index]
console.log("Random letter from name: "+random_letter)
console.log("Random index: "+random_index)