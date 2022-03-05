class Person{

    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    talk(){
        console.log("Hi my name is " + this.name);
    }
}

const john = new Person('John', 30, '6ft');
john.talk();

const smith = new Person('Smith', 27, '6ft');
smith.talk();