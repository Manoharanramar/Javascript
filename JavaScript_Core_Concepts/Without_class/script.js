/*This like put means the direct object put:
User {name: 'Abdul', age: 34, login: ƒ}
age: 34
login: ƒ ()
length: 0//Here login is the object called here
name: ""prototype:
 {}constructor: ƒ ()
 [[Prototype]]: Objectarguments: nullcaller: null[[FunctionLocation]]: script.js:4[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]name: "Abdul"[[Prototype]]: Object
*/
function User(name,age){
    this.name=name
    this.age=age
    this.login=function(){
        console.log("you are logged in")
    }
}
let user1=new User('Abdul',34)
user1.login()


//Instand of
function User2(name,age){
    this.name=name
    this.age=age
}
User.prototype.login=function(){
    console.log('hi',this.name)
    console.log('You are logged in')
}
let user2=new User2('Ram',34)
user1.login()
