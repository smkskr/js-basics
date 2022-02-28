
const arr = [1];

//person object
let person = {
    name : 'John',
    age : 27,
    sayHello : function(){
        console.log(this);//refers to the person object
        arr.forEach(() => {
            console.log(this);//inside for each
        });
    }
}

person.sayHello();