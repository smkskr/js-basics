'use strict' //strict mode

//define person object
let person = {
    name : 'John',
    age : 27,
    //method
    sayHello : function(){
        //John says Hello
        console.log(this.name + " says Hello");
    }
}


person.sayHello();//refers person object
const hello = person.sayHello;
hello();//refers to global object