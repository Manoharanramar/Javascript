let user1={
    name:'Mano',
    age:22,
    login(){
      console.log('You are logged in')  
    },
    logout(){
        console.log('You are logged out')
    }
}

user1.login()

let user2={
    name:'John',
    age:22,
    login(){
    console.log("hi ",name)//hi 
        console.log("hi ",this.name)//hi mano->instant name
      console.log('You are logged in')  
    },
    logout(){ 
        console.log('You are logged out')
    }
}

user2.login()

let user3={
    name:'Mani',
    age:22,
    login(){
         console.log("hi ",this.name)//hi mano->instant name
      console.log('You are logged in')  
    },
    logout(){
        console.log('You are logged out')
    }
}

user3.login()