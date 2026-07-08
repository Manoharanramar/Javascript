//Get and set methods
class Temperature{
    constructor(temp){
        this._temp=temp//prive variable->_temp
    }
    get temp(){
        return this
    }

    set temp(temp){
        if(temp>90){
            temp=110
        }
        this._temp=temp
    }
     get temps(){
        return `${this._temp} deg celcius`
    }
}
let temp1=new Temperature(100)
console.log(temp1.temp)
console.log(temp1.temps)