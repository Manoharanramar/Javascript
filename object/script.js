//properties->Make,color,ScreenSize,Ram
//Things it can do->call,play games,watch movies,listen to music

//properties: video,title,thumbnail,play button,Description
//methods: click the button, show the stats of the city

let item={//object literal
    name:'iPhone 14 Pro Max',//name=key and 'iPhone 14 Pro Max'==value it is called key value pair
    color:'Space Black',
    quantity:1,
    categories:['electronics','phone'],//array also
    dimensions: {//object inside object
        length:7,
        breadth:3.5,
        height:.5
    }
}
console.log("item1: "+item1)//o/p:{name: 'iPhone 14 Pro Max', color:'Space Black',quality:1}
console.log(item.categories[0])//electronics
console.log(item.dimensions)//o/p:{length:7,breadth:3.5,height:.5}
console.log(item.dimensions.length)//o/p:7
//another way to create object
let item2=new Object();
item2.name='charger'
item2.price=700
item2.quality=1
console.log("item2: "+item2)//o/p:{name: 'charger',price:700,quality:1}

//accessing object
//dot notation
console.log(item.price)
item.price=25000
console.log(item.price)//o/p:{name: 'charger',price:25000,quality:1}


//adding new property
item.returnable=true
console.log(item)//o/p:{name: 'charger',price:25000,quality:1,returnable:true}


//square bracket notation
console.log(item['price'])//25000
item['returbale']=false
console.log(item)//o/p:{name: 'charger',price:25000,quality:1,returnable:false}
//        |
    //    |
        //use this also
let key= 'price';
item[key]=27500
item.key=28000
console.log(item)



let method_insted={
    name:"phone",
    quality:1,
    price:25000,
    buy:function(){
        console.log("item add to card")
    },
    addTOList:function(){
        console.log("item added to list")
    },
    addTOLists(){
        console.log("item added to list")
    }
}
method_insted.buy()//item add to card
method_insted.addTOList()//item added to list
method_insted.addTOLists()//item added to list


/*Exercise-User Object:
Create user object.Define appropriate properties and methods.Try accessing/modifying/adding new values.*/